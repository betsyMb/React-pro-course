import { useState } from "react";

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prevCounter: number) => prevCounter + 1);
  };
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

interface Props {
  initialValue?: number;
}
