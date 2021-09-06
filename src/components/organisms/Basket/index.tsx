/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { CouponCard, MesageCard, OrderDetails, Table } from "../../molecules";

export const Baskett: FC<{}> = ({}) => {
  return (
    <>
      <h2 className="text-3xl text-black font-bold flex justify-center mt-6 mb-6">
        Sepet
      </h2>
      <hr />

      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <Table
              ProductList={[
                {
                  productImage:
                    "https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg",
                  productName: "Kulaklık",
                  ProductPrice: "12",
                  productCount: "3",
                  totalPrice: "36",
                },
                {
                  productImage:
                    "https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png",
                  productName: "Araba",
                  ProductPrice: "120000",
                  productCount: "1",
                  totalPrice: "120000",
                },
                {
                  productImage:
                    "https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg",
                  productName: "Kalem",
                  ProductPrice: "12",
                  productCount: "3",
                  totalPrice: "36",
                },
              ]}
            />
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <CouponCard />
                <MesageCard />
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <OrderDetails coupon="25.55" total="1272.222" kdv="85.000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
