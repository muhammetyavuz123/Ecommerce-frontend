import axios from "axios";

export const postOrder = async (input: any) => {
  const { data } = await axios.post(`http://localhost:4000/order`, input);

  return data;
};

export const fetchOrders = async () => {
  const { data } = await axios.get(`http://localhost:4000/order`);

  return data;
};
