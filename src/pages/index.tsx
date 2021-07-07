import styles from "./home.module.scss"
import {GetServerSideProps} from "next"
import Head from "next/head";
import Img from "next/image"
import avatarImg from "../../public/images/avatar.svg"
import {SubscribeButton} from "../components/SubscribeButton/index"
import { stripe } from "../services/stripe";

interface HomeProps{
  product:{
    priceId:string,
    amount:string
  }
}

export default function Home({product}:HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <Img src={avatarImg} alt="Girl Coding" />
      </main>
    </>
  );
}


export const getServerSideProps:GetServerSideProps = async ()=> {
  console.log("say hy to next SSR 😁")


  const price = await stripe.prices.retrieve("price_1JAZSVEYE2dB9RJb7gEHBHQf")

  const product = {
    priceId:price.id,
    amount:new Intl.NumberFormat("en-US",{
      style:"currency",
      currency:"USD"
    }).format(price.unit_amount / 100),
  }

  return {
    props:{
      product
    }
  }
}