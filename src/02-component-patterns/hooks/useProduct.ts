import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

export const useProduct = ({
  onChange,
  product,
  countValue = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(countValue);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(countValue);
  }, [countValue]);

  return {
    counter,
    increaseBy,
  };
};

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  countValue?: number;
}
