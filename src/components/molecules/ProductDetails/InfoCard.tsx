import { FC } from "react";

export const InfoCard: FC<{
  ProductTitle: string;
  ProductPrice: string;
  ProductSales: string;
  ProductDescription: string;
  ProductCount?: string;
  ProductCountKind?: string;
}> = ({
  ProductTitle,
  ProductPrice,
  ProductSales,
  ProductDescription,
  ProductCount,
  ProductCountKind,
}) => {
  return (
    <>
      <h2 className="mb-2 mt-5 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
        {ProductTitle}
      </h2>
      <p className="text-gray-500 text-sm">
        By{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          ABC Company
        </a>
      </p>

      <div className="flex items-center space-x-4 my-4">
        <div>
          <div className="rounded-lg bg-gray-100 flex py-2 px-3 mt-5 mb-5">
            <span className="font-bold text-indigo-600 text-3xl">
              {" "}
              {ProductPrice} ₺
            </span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-green-500 text-xl font-semibold">
            İndirim {ProductSales}%
          </p>
          <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
        </div>
      </div>

      <p className="text-gray-500 mt-5 mb-5">{ProductDescription}</p>

      <div className="flex py-4 space-x-4">
        <div className="relative">
          <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
            {ProductCountKind}
          </div>
          <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <svg
            className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>

        <button
          type="button"
          className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
        >
          Sepete Ekle
        </button>
      </div>
    </>
  );
};
