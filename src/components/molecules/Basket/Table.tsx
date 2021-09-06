/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const Table: FC<{
  ProductList: {
    productImage: string;
    productName: string;
    productCount: string;
    ProductPrice: string;
    totalPrice: string;
  }[];
}> = ({ ProductList }) => {
  return (
    <>
      <table className="w-full text-sm lg:text-base">
        <thead>
          <tr className="h-12 uppercase">
            <th className="hidden md:table-cell"></th>
            <th className="text-left">Ürün Adı</th>
            <th className="lg:text-right text-left pl-5 lg:pl-0">
              <span className="lg:hidden" title="Quantity">
                Qtd
              </span>
              <span className="hidden lg:inline">Ürün Adedi</span>
            </th>
            <th className="hidden text-right md:table-cell">
              Ürün Adet Fiyatı
            </th>
            <th className="text-right">Toplam Ürün Fiyatı</th>
          </tr>
        </thead>
        <tbody>
          {ProductList.map(
            (
              {
                productImage,
                productName,
                productCount,
                ProductPrice,
                totalPrice,
              },
              index
            ) => (
              <tr key={index}>
                <td className="hidden pb-4 md:table-cell">
                  <a href="#">
                    <img
                      src={productImage}
                      className="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p className="mb-2 md:ml-4">{productName}</p>
                    <form action="" method="POST">
                      <button type="submit" className="text-gray-700 md:ml-4">
                        <small>Sil</small>
                      </button>
                    </form>
                  </a>
                </td>
                <td className="justify-center md:justify-end md:flex mt-6">
                  <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">
                      <input
                        type="number"
                        value={productCount}
                        className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                      />
                    </div>
                  </div>
                </td>
                <td className="hidden text-right md:table-cell">
                  <span className="text-sm lg:text-base font-medium">
                    {ProductPrice}₺
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-sm lg:text-base font-medium">
                    {totalPrice}₺
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
