import { FC } from "react";
import {
  Header,
  Modal,
  ProductTable,
  SideBar,
  ProductCreateForm,
} from "../../molecules";

export const ProductSection: FC<{}> = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <Header />
      <SideBar />
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        {/* <StatictisCard /> */}
        <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
          <div className="flex justify-end">
            {" "}
            <Modal title="Ürün Ekle" btnTitle="Ürün Ekle">
              <ProductCreateForm />
            </Modal>
          </div>

          <ProductTable
            productList={[
              {
                productImage: "https://randomuser.me/api/portraits/men/1.jpg",
                productName: "Kulaklık",
                productCount: "2",
                productDescription: "Lorem İpsume...",
                productTotalPrice: "36.00",
              },
              {
                productImage: "https://randomuser.me/api/portraits/men/1.jpg",
                productName: "Kulaklık",
                productCount: "2",
                productDescription: "Lorem İpsume...",
                productTotalPrice: "36.00",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
