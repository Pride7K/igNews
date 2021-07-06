import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Img from "next/image";
import logoImg from "../../../public/images/logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Img src={logoImg} alt="ig.news" />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a className={styles.active} href="">
            Posts
          </a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
