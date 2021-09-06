import { FC } from "react";
import { ProductCard } from "../../../molecules/ProductCard";

export const ProductsCards: FC<{}> = ({}) => (
  <>
    <h2 className="flex justify-center mb-8 mt-4 font-bold text-4xl ">
      Tüm Ürünler
    </h2>
    <hr className="mb-8" />
    <div className=" grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      <ProductCard
        ProductCardList={[
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
          {
            title: "Spor Ayakkabı",
            price: "250",
            stockStatus: "Stokta ",
            city: "India",
          },
        ]}
      />
    </div>
  </>
);
