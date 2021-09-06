import { FC } from "react";

export const CategoryItem: FC<{
  categoryList: { title: string; href: string }[];
}> = ({ categoryList }) => {
  return (
    <>
      {categoryList.map(({ title, href }, index) => (
        <li className="py-3 border-b-2" key={index}>
          <a href={href} className="list-none ml-5 hover:text-indigo-600">
            {title}
          </a>
        </li>
      ))}
    </>
  );
};
