import { FC } from "react";

export const OrderDetails: FC<{
  kdv: string;
  total: string;
  coupon: string;
  onSubmitClick: () => void;
}> = ({ kdv, total, coupon, onSubmitClick }) => {
  return (
    <>
      <div className="p-4 bg-gray-100 rounded-full">
        <h1 className="ml-2 font-bold uppercase">Order Details</h1>
      </div>
      <div className="p-4">
        <div className="flex justify-between pt-4 border-b">
          <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
            <form action="" method="POST">
              <button type="submit" className="mr-2 mt-1 lg:mt-2">
                <svg
                  aria-hidden="true"
                  data-prefix="far"
                  data-icon="trash-alt"
                  className="w-4 text-red-600 hover:text-red-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                  />
                </svg>
              </button>
            </form>
            Kupon İndirimi
          </div>
          <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
            {coupon} ₺
          </div>
        </div>

        <div className="flex justify-between pt-4 border-b">
          <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
            KDV
          </div>
          <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
            {kdv} ₺
          </div>
        </div>
        <div className="flex justify-between pt-4 border-b">
          <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
            Toplam Tutar
          </div>
          <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
            {total} ₺
          </div>
        </div>
        <button
          onClick={onSubmitClick}
          className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
        >
          <svg
            aria-hidden="true"
            data-prefix="far"
            data-icon="credit-card"
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
            />
          </svg>
          <span className="ml-2 mt-5px">Sipariş Ver</span>
        </button>
      </div>
    </>
  );
};
