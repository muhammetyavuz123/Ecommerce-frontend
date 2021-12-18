import { FC } from "react";
import { Slider, InfoCard } from "../../molecules";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchProduct } from "../../../apis";
import moment from "moment";
import { useBasket } from "../../../contexts/BasketContext";
import product from "../../../../pages/product/[id]";

export const ProductDetail: FC<{}> = () => {
  const router = useRouter();
  const { items, addToBasket } = useBasket();

  const { id } = router.query;
  const { isLoading, error, data } = useQuery<product, Error>(
    ["product", id],
    () => fetchProduct(id)
  );

  const findBasketItem = items.find((item) => item._id === id);
  console.log("findBasketItem", findBasketItem);

  const addBasket = () => {
    addToBasket(data, findBasketItem);
  };

  return (
    <>
      <div className="container mx-auto mt-14 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 ">
          <div>
            <Slider />
          </div>
          <div>
            {data ? (
              <>
                <InfoCard
                  buttonTitle={
                    findBasketItem ? "Sepetten Çıkar" : "Sepete Ekle "
                  }
                  ProductTitle={data.title}
                  ProductPrice={data.price}
                  ProductSales="12"
                  ProductDescription={data.description}
                  ProductCount={moment(data.createdAt).format("DD / MM / YY")}
                  date={moment(data.createdAt).format("DD/MM/YY")}
                  ProductCountKind="Koli"
                  addToBasket={() => addBasket()}
                />
              </>
            ) : (
              "Loading"
            )}
          </div>
        </div>
      </div>
    </>
  );
};
