import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Img from "next/image";
import logoImg from "../../../public/images/logo.svg";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Img src={logoImg} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href={`${process.env.BASE_URL}/`}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={`${process.env.BASE_URL}/posts`} prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
