import Head from "next/head";
import { Breadcrumbs } from "../src/components/molecules";
import {
  Navbar,
  Footer,
  ProductsCards,
  Pagination,
  ProductLayout,
} from "../src/components/organisms";

export default function Products() {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Breadcrumbs page="Tüm Ürünler" />
        {/* <ProductsCards /> */}
        <ProductLayout />
        <Pagination />
        <Footer />
      </main>
    </div>
  );
}