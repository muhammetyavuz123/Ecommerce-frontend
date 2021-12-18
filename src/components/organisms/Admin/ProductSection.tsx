import { FC, useState, useEffect } from "react";
import {
  Header,
  Modal,
  ProductTable,
  SideBar,
  ProductCreateForm,
} from "../../molecules";
import { fetchProducts, deleteProduct } from "../../../apis";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Button } from "../../atoms";
import Link from "next/link";

export const ProductSection: FC<{}> = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { status, data, error, isFetching, isPreviousData } = useQuery<
    products[]
  >(["admin:products", page], () => fetchProducts(page), {
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

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  return (
    <>
      {/* {status === "loading" && !error ? (
        <>
          <div>loading...</div>
        </>
      ) : (
        ""
      )} */}
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <SideBar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          {/* <StatictisCard /> */}
          <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
            <div className="flex justify-end">
              {" "}
              {/* <Modal title="Ürün Ekle" btnTitle="Ürün Ekle">
                <ProductCreateForm />
              </Modal> */}
              <Link href="/admin/product/addProduct" passHref>
                <a>
                  <Button label="Ürün Ekle" />
                </a>
              </Link>
            </div>
            {data?.length == 0 && <div>Sepetinizde Ürün Bulunmamaktadır.</div>}
            {/* {data?.length > 0 && ( */}
            <>
              <ProductTable
                productList={data?.map((item) => ({
                  id: item._id,
                  productImage: item.photos[0],
                  productName: item.title,
                  productCount: "2",
                  productDescription: "Lorem İpsume...",
                  productTotalPrice: item.price,
                  productsDelete: () =>
                    deleteMutation.mutate(item._id, {
                      onSuccess: () => {
                        alert("silindi");
                      },
                    }),
                }))}
              />
            </>
            {/* )} */}
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
          </div>
        </div>
      </div>
    </>
  );
};
