import { FC } from "react";
import { CategoryItem } from "./CategoryItem";

export const Category: FC<{}> = () => {
  return (
    <>
      <form className="hidden lg:block">
        <h3 className="sr-only">Categories</h3>
        <ul
          role="list"
          className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
        >
          <li>
            <a href="#">Totes</a>
          </li>

          <li>
            <a href="#">Backpacks</a>
          </li>

          <li>
            <a href="#">Travel Bags</a>
          </li>

          <li>
            <a href="#">Hip Bags</a>
          </li>

          <li>
            <a href="#">Laptop Sleeves</a>
          </li>
        </ul>

        <div className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-1"
              aria-expanded="false"
            >
              <span className="font-medium text-gray-900">Category</span>
              <span className="ml-6 flex items-center">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </h3>
          <div className="pt-6" id="filter-section-1">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="filter-category-0"
                  name="category[]"
                  value="new-arrivals"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-category-0"
                  className="ml-3 text-sm text-gray-600"
                >
                  New Arrivals
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="filter-category-1"
                  name="category[]"
                  value="sale"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-category-1"
                  className="ml-3 text-sm text-gray-600"
                >
                  Sale
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="filter-category-2"
                  name="category[]"
                  value="travel"
                  type="checkbox"
                  checked
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-category-2"
                  className="ml-3 text-sm text-gray-600"
                >
                  Travel
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="filter-category-3"
                  name="category[]"
                  value="organization"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-category-3"
                  className="ml-3 text-sm text-gray-600"
                >
                  Organization
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="filter-category-4"
                  name="category[]"
                  value="accessories"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-category-4"
                  className="ml-3 text-sm text-gray-600"
                >
                  Accessories
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
