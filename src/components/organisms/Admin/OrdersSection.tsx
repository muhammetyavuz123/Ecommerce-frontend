import { FC } from "react";
import { Header, OrderTable, SideBar } from "../../molecules";
import { useQuery } from "react-query";
import { fetchOrders } from "../../../apis";

export const OrdersSection: FC<{}> = () => {
  const { data, isLoading, isError, error } = useQuery<order[]>(
    ["admin:orders"],
    () => fetchOrders(),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );

  return (
    <section className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <Header />
      <SideBar />
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        {/* <StatictisCard /> */}
        {data?.length == 0 && <div>Sepetinizde Ürün Bulunmamaktadır.</div>}
        <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
          {(data?.length || []) > 0 && (
            <OrderTable
              orderList={data?.map((item) => ({
                orderImage: "https://randomuser.me/api/portraits/men/1.jpg",
                orderName: item.items.title,
                orderCount: "2",
                orderPrice: item.adress,
                orderTotalPrice: "36.00",
              }))}
            />
          )}
        </div>
      </div>
    </section>
  );
};
