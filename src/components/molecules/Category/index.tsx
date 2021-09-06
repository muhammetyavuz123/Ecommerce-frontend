import { FC } from "react";
import { CategoryItem } from "./CategoryItem";

export const Category: FC<{}> = () => {
  return (
    <>
      <div className="bg-white mt-20 rounded-lg flex justify-around items-center ">
        <input
          type="text"
          placeholder="seach"
          className=" bg-gray-100 rounded-l-md  outline-none  ring-indigo-700 w-full p-2"
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-6 bg-gray-100 rounded-r-md pr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
      <div className="bg-white  rounded-md border mt-5">
        <h1 className="text-center   text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">
          Kategoriler
        </h1>
        <div className="bg-white rounded-md list-none  text-left  ">
          <CategoryItem
            categoryList={[
              {
                title: "Çatal Seti",
                href: "/",
              },
              {
                title: "Bıçak Seti",
                href: "/",
              },
              {
                title: "Kaşık Seti",
                href: "/",
              },
              {
                title: "Karışık Set",
                href: "/",
              },
              {
                title: "Diğer Ürünler",
                href: "/",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
