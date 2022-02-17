import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15,
  });
  return (
    <>
      <h2>Counter Hook:</h2>
      <h3 ref={elementToAnimate}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
