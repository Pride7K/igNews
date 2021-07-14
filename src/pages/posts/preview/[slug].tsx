import { GetStaticPaths, GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/client";
import { RichText } from "prismic-dom";
import { getPrimiscClient } from "../../../services/prismic";
import Head from "next/head";
import styles from "../post.module.scss";
import Link from "next/link";
import { useEffect} from "react"
import { useRouter } from "next/router";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updated: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session?.activeSubscription)
    {
      router.push(`${process.env.BASE_URL}/posts/${post.slug}`)
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updated}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href={`${process.env.BASE_URL}/`}>
              <a href="">Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrimiscClient();
  const response = await prismic.getByUID("publicatio", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updated: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };
  return {
    props: {
      post,
    },
    revalidate: 60 * 30,
  };
};
