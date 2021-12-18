import Head from "next/head";
import { Breadcrumbs } from "../src/components/molecules";
import { Navbar, Footer, Baskett } from "../src/components/organisms";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Breadcrumbs page="404 Page" />
        <div>404</div>
        <Footer />
      </main>
    </div>
  );
}
