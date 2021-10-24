import { FC } from "react";
import { ProductsCards } from "../Cards";
import { MobilCategory, Category } from "../../../molecules";

export const ProductLayout: FC<{}> = () => {
  return (
    <>
      <section>
        <div className="bg-white">
          <div>
            <MobilCategory />
            <main className=" mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  Tüm Ürünler
                </h1>

                <div className="flex items-center">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Sort
                        <svg
                          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="font-medium text-gray-900 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          Most Popular
                        </a>

                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-1"
                        >
                          Best Rating
                        </a>

                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-2"
                        >
                          Newest
                        </a>

                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-3"
                        >
                          Price: Low to High
                        </a>

                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-4"
                        >
                          Price: High to Low
                        </a>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View grid</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  >
                    <span className="sr-only">Filters</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pt-6 pb-24"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                  <Category />

                  <div className="lg:col-span-3">
                    <ProductsCards />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};
