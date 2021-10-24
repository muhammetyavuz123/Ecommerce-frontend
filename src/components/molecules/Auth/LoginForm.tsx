import { FC } from "react";
import { Input } from "../../atoms";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  phone: number;
  password: string;
}
export const LoginForm: FC<{}> = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data.email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
          <Link href="/auth/register" passHref>
            <a>Kayıt Ol</a>
          </Link>
        </div>
        <button className="uppercase block w-full p-4 my-7 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
          Giriş
        </button>
      </form>
    </div>
  );
};
