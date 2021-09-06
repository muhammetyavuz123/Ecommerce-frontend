import { FC } from "react";
import { ProductCard } from "../../../molecules/ProductCard";
import { Button } from "../../../atoms";
import Link from "next/link";

export const ProductCards: FC<{}> = ({}) => (
  <>
    <div className="container mx-auto ">
      <h2 className="flex justify-center mb-8 mt-4 font-bold text-4xl ">
        En Yeni Ürünler
      </h2>
      <div className=" grid gap-8 grid-cols-12 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-12">
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
          ]}
        />
      </div>
    </div>
    <div className="container mx-auto">
      <div className=" flex justify-center items-center mt-12">
        <Link href="/products" passHref>
          <a>
            <Button label="Daha Fazla ürün " />
          </a>
        </Link>
      </div>
    </div>
  </>
);
