import { FC } from "react";

export const Input: FC<{
  type: string;
  name: string;
  placeholder?: string;
  id: string;
  label?: string;
}> = ({ type, name, placeholder, id, label }) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="block w-full h-14 p-4 text-lg rounded-sm border"
      />
    </>
  );
};
