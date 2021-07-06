import styles from "./home.module.scss"
import Head from "next/head";
import Img from "next/image"
import avatarImg from "../../public/images/avatar.svg"
import {SubscribeButton} from "../components/SubscribeButton/index"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContaniner}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about <br/> the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton/>
        </section>

        <Img src={avatarImg} alt="Girl Coding" />
      </main>
    </>
  );
}
