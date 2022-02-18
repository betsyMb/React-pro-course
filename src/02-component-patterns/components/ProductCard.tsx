import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";

import {
  onChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  countValue,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, countValue });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard}  ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  countValue?: number;
}
