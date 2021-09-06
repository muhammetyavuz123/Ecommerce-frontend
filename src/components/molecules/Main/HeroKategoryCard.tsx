/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Image from "next/image";
export const HeroKategoryCard: FC<{
  categoryCardList: { image: string; title: string; subTitle: string }[];
}> = ({ categoryCardList }) => {
  return (
    <>
      <div className="text-white relative">
        <h3 className="text-uppercase font-semibold">
          Kategoriler & Ürün Çeşitleri
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase">
          {categoryCardList.map(({ image, title, subTitle }, index) => (
            <div
              key={index}
              className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition"
            >
              <img className="w-9" src={image} alt="sd" />
              {/* <Image
                layout="responsive"
                className="rounded-xl w-9"
                src={image}
                alt="gh"
                width={100}
                height={120}
              /> */}

              <div>
                <span>{title}</span>
                <span className="text-xs text-blue-300 block">{subTitle}</span>
              </div>
              <div>
                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
