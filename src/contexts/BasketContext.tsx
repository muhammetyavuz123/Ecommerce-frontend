import { useContext, useState, createContext, useEffect } from "react";

interface IBasketContextProps {
  items: any[];
  addToBasket: any;
  removeFromBasket: any;
  emptyBasket: any;
}
const BasketContext = createContext({} as IBasketContextProps);

// const defaultBasket =
//   JSON.parse(window.localStorage.getItem("basket") || "") || [];
const BasketProvider = (props: any) => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToBasket = (data: any, findBasketItem: any) => {
    if (!findBasketItem) {
      return setItems((items: any) => [data, ...items]);
    }
    const filtered = items.filter(
      (item: any) => item._id !== findBasketItem._id
    );
    setItems(filtered);
  };

  const removeFromBasket = (item_id: string) => {
    const filtered = items.filter((item: any) => item._id !== item_id);

    setItems(filtered);
  };

  const emptyBasket = () => setItems([]);

  const values = {
    items,
    setItems,
    addToBasket,
    removeFromBasket,
    emptyBasket,
  };

  return (
    <BasketContext.Provider value={values}>
      {props.children}
    </BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
