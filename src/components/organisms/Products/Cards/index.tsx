import { FC, useState, useEffect } from "react";
import { ProductCard } from "../../../molecules/ProductCard";
import { useQuery, useQueryClient } from "react-query";
import { fetchProducts } from "../../../../apis";
import { useBasket } from "../../../../contexts/BasketContext";

export const ProductsCards: FC = ({}) => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { addToBasket, items } = useBasket();

  const { status, data, error, isFetching, isPreviousData } = useQuery<
    products[]
  >(["products", page], () => fetchProducts(page), {
    keepPreviousData: true,
    staleTime: 5000,
  });

  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery(["products", page + 1], () =>
        fetchProducts(page + 1)
      );
    }
  }, [data, page, queryClient]);

  const findBasketItem = (item: any) => {
    const itemFind = items.find((basket_item) => basket_item._id === item._id);

    addToBasket(item, itemFind);
  };

  return (
    <>
      {status === "loading" && !error ? (
        <>
          <div>loading...</div>
        </>
      ) : (
        ""
      )}
      <div className=" grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
        {data?.map((item) => {
          return (
            <ProductCard
              key={item._id}
              ProductCardList={[
                {
                  id: item._id,
                  buttonTitle: "Sepete Ekle",
                  title: item.title,
                  productPrice: item.price,
                  stockStatus: "Stokta ",
                  city: "İstanbul",
                  photos: item.photos[0],
                  addToBasket: () => findBasketItem(item),
                },
              ]}
            />
          );
        })}
      </div>
      <div>
        <ul className="flex justify-center items-center mt-16 mb-8">
          <button
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 1}
          >
            <a className="flex items-center font-bold" href="#">
              <span className="mx-1">Geri</span>
            </a>
          </button>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a className="font-bold" href="#">
              {page + 1}
            </a>
          </li>

          <button
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg"
            onClick={() => {
              setPage((old) => (data ? old + 1 : old));
            }}
            disabled={isPreviousData || !data}
          >
            <a className="flex items-center font-bold" href="#">
              <span className="mx-1">İleri</span>
            </a>
          </button>
        </ul>
      </div>
    </>
  );
};
