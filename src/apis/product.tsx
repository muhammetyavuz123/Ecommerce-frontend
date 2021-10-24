import axios from "axios";

const backUrl = process.env.API_KEY;

export const fetchProducts = async (page = 1) => {
  const { data } = await axios.get(
    `http://localhost:4000/product?page=${page}`
  );
  console.log("url", backUrl);
  return data;
};
export const fetchProduct = async (id: string | string[] | undefined) => {
  const { data } = await axios.get(`http://localhost:4000/product/${id}`);

  return data;
};
