import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {


  const [counter, setCounter] = useState(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0) && Math.min(counter + value, initialValues?.maxCount ? initialValues.maxCount : counter + value);


    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = (() => {
    setCounter(initialValues?.count || value);
  })

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {

    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    reset,
  };


};


