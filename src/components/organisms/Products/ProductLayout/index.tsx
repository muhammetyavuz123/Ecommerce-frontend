import { FC } from "react";
import { ProductsCards } from "../Cards";
import { Category } from "../../../molecules/Category";

export const ProductLayout: FC<{}> = () => {
  return (
    <>
      <section>
        <div className=" md:grid grid-cols-5  px-4 py-6 min-h-full space-y-6 sm:space-y-0 sm:gap-4">
          <div className=" col-span-1 ">
            <Category />
          </div>

          <div className=" col-span-4 ">
            <ProductsCards />
          </div>
        </div>
      </section>
    </>
  );
};
