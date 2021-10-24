import { FC } from "react";
import { Slider, InfoCard } from "../../molecules";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchProduct } from "../../../apis";
import moment from "moment";
export const ProductDetail: FC<{}> = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, error, data } = useQuery<product, Error>(
    ["product", id],
    () => fetchProduct(id)
  );
  console.log(moment(data?.createdAt).format("DD / MM / YY"));

  return (
    <>
      <div className="container mx-auto mt-14 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 ">
          <div>
            <Slider />
          </div>
          <div>
            {data ? (
              <InfoCard
                ProductTitle={data.title}
                ProductPrice={data.price}
                ProductSales="12"
                ProductDescription={data.description}
                ProductCount={moment(data.createdAt).format("DD / MM / YY")}
                date={moment(data.createdAt).format("DD/MM/YY")}
                ProductCountKind="Koli"
              />
            ) : (
              "Loadin"
            )}
          </div>
        </div>
      </div>
    </>
  );
};
