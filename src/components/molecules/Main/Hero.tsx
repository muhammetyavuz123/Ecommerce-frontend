import { FC } from "react";

export const Hero: FC<{
  title: string;
  subtitle: string;
  subtitle2: string;
  subtitle3: string;
  subtitle4: string;
  subtitle5: string;
}> = ({
  children,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
}) => (
  <div className="bg-gradient-to-br from-indigo-900 to-green-900 h-[700px] overflow-auto">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="w-4/5">
        <h1 className="mt-32 text-white text-6xl font-bold">
          {title} <br />
          <span className="text-blue-400"> {subtitle} </span>
        </h1>
      </div>
      <div className="w-5/6 my-10 ml-6">
        <h3 className="text-gray-300">
          {subtitle2} & {subtitle3} <br />
          <strong className="text-white">{subtitle4}</strong>
          <br />
          {subtitle5}
        </h3>
      </div>
      <div className="hidden sm:block opacity-50 z-0">
        <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
        <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
        <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
      </div>
      {children}
    </div>
  </div>
);
