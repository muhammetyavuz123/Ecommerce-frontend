import { FC } from "react";

export const BannerCard: FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description }) => {
  return (
    <>
      <div
        className="h-64 rounded-md overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144",
        }}
      >
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div className="px-10 ">
            <h2 className="text-2xl  text-white font-semibold">{title}</h2>
            <p className="mt-2 text-gray-400">{description}</p>
            <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <span>Alışveriş Yap</span>
              <svg
                className="h-5 w-5 mx-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
