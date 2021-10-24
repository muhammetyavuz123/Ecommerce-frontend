import axios from "axios";

const backUrl = process.env.API_KEY;

export const registerFetch = async (input: any) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/register`,
    input
  );
  return data;
};
