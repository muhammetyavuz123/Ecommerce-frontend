import { FC } from "react";
import { Input } from "../../atoms";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerFetch } from "../../../apis";
import { ApiError } from "next/dist/next-server/server/api-utils";
interface IFormInput {
  name: string;
  email: string;
  phone: number;
  password: string;
}
export const RegisterForm: FC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const registerResponse = await registerFetch({
        password: data.password,
        email: data.email,
      });
    } catch (e: any) {
      const error = e.response.data.message;
      return error;
    }
  };

  return (
    <div>
      {errors.name && errors.email && "Last name is required"}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="name"
          id="name"
          placeholder="Adı Soyadı"
          {...register("name", { required: true })}
        />
        <Input
          type="phone"
          id="phone"
          placeholder="Telefon Numarası"
          {...register("phone", { required: true })}
        />
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
          <Link href="/auth/login" passHref>
            <a>Zaten Hesabım Var. Giriş Yap</a>
          </Link>
        </div>
        <button
          type="submit"
          className="uppercase block w-full p-4 my-7 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};
