import { FC } from "react";

export const MobilCategory: FC<{}> = () => {
  return (
    <div>
      <div
        className="fixed inset-0 flex z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        ></div>
        <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
          <div className="px-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form className="mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="font-medium text-gray-900 px-2 py-3">
              <li>
                <a href="#" className="block px-2 py-3">
                  Totes
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Backpacks
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Travel Bags
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Hip Bags
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Laptop Sleeves
                </a>
              </li>
            </ul>

            <div className="border-t border-gray-200 px-4 py-6">
              <h3 className="-mx-2 -my-3 flow-root">
                <button
                  type="button"
                  className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                  aria-controls="filter-section-mobile-0"
                  aria-expanded="false"
                >
                  <span className="font-medium text-gray-900">Color</span>
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
              <div className="pt-6" id="filter-section-mobile-0">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                      id="filter-mobile-color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="filter-mobile-color-0"
                      className="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      White
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-color-3"
                      name="color[]"
                      value="brown"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="filter-mobile-color-3"
                      className="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      Brown
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-color-4"
                      name="color[]"
                      value="green"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="filter-mobile-color-4"
                      className="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      Green
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-color-5"
                      name="color[]"
                      value="purple"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="filter-mobile-color-5"
                      className="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      Purple
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
