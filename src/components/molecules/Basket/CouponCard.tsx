import { FC } from "react";

export const CouponCard: FC<{}> = () => {
  return (
    <>
      <div className="p-4 bg-gray-100 rounded-full">
        <h1 className="ml-2 font-bold uppercase">Kupon Kodu</h1>
      </div>
      <div className="p-4">
        <p className="mb-4 italic">
          İşletme tarfında verilen İndirim Kodunu Giriniz.
        </p>
        <div className="justify-center md:flex">
          <form action="" method="POST">
            <div className="flex items-center w-full h-13 pl-3 bg-white  border rounded-full">
              <input
                type="coupon"
                name="code"
                id="coupon"
                placeholder="Kupon Kodu"
                value=""
                className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
              />
              <button
                type="submit"
                className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
              >
                <svg
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="gift"
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                  />
                </svg>
                <span className="font-medium">Kupon Kodu</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
