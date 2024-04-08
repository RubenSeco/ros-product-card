import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProducCardHandlers } from '../interfaces/interfaces';
import { ProductContextProps, Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProducCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues
  });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}>
        {children({ count: counter, reset, isMaxCountReached, product, increaseBy, maxCount: initialValues?.maxCount })}
      </div>
    </Provider>
  );
};
