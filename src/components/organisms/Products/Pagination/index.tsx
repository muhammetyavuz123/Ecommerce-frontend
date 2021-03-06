import { FC } from "react";

export const Pagination: FC = () => {
  return (
    <div>
      <ul className="flex justify-center items-center mt-16 mb-8">
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
          <a className="flex items-center font-bold" href="#">
            <span className="mx-1">previous</span>
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href="#">
            1
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href="#">
            2
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href="#">
            3
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="flex items-center font-bold" href="#">
            <span className="mx-1">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
