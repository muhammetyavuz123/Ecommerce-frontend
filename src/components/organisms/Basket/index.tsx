/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { CouponCard, MesageCard, OrderDetails, Table } from "../../molecules";
import { useBasket } from "../../../contexts/BasketContext";
import { useAuth } from "../../../contexts/authContext";
import { postOrder } from "../../../apis";

export const Baskett: FC<{}> = ({}) => {
  const { items, removeFromBasket, emptyBasket } = useBasket();
  const { user } = useAuth();
  const [address, setAddress] = useState(String);

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id);

    const input = {
      address,
      items: JSON.stringify(itemIds),
      // user: user,
    };

    await postOrder(input);
    emptyBasket();
    setAddress("");
  };

  return (
    <>
      <h2 className="text-3xl text-black font-bold flex justify-center mt-6 mb-6">
        Sepet
      </h2>
      <hr />

      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            {items.length == 0 && <div>Sepetinizde Ürün Bulunmamaktadır.</div>}
            {items.length > 0 && (
              <>
                <Table
                  ProductList={items?.map((item) => ({
                    key: item._id,
                    productImage: item.photos[0],
                    productName: item.title,
                    ProductPrice: item.price,
                    productCount: "3",
                    totalPrice: "36",
                    productId: item._id,
                    deleteBtn: () => removeFromBasket(item._id),
                  }))}
                />
              </>
            )}

            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <CouponCard />
                <MesageCard address={address} setAddress={setAddress} />
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <OrderDetails
                  coupon="0"
                  total={total}
                  kdv="85.000"
                  onSubmitClick={handleSubmitForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
