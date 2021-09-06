import { FC } from "react";
import { Header, OrderTable, SideBar } from "../../molecules";

export const OrdersSection: FC<{}> = () => {
  return (
    <div>
      <div>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          <Header />
          <SideBar />
          <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            {/* <StatictisCard /> */}
            <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
              <OrderTable
                OrderList={[
                  {
                    orderImage: "https://randomuser.me/api/portraits/men/1.jpg",

                    orderName: "Kulaklık",
                    orderCount: "2",
                    orderPrice: "12.00",
                    orderTotalPrice: "36.00",
                  },
                  {
                    orderImage: "https://randomuser.me/api/portraits/men/1.jpg",

                    orderName: "Kulaklık",
                    orderCount: "2",
                    orderPrice: "12.00",
                    orderTotalPrice: "36.00",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
