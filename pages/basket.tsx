import Head from "next/head";
import { Breadcrumbs } from "../src/components/molecules";
import { Navbar, Footer, Baskett } from "../src/components/organisms";

export default function Basket() {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Breadcrumbs page="Sepet" />
        <Baskett />
        <Footer />
      </main>
    </div>
  );
}