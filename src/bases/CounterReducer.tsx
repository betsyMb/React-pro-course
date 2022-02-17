import { useReducer } from "react";

const INITIAL_STATE: CounterState = {
  counter: 10,
  previus: 15,
  changes: 20,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const CounterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { changes, counter } = state;
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        changes: 0,
        previus: 0,
      };
    case "increaseBy":
      return {
        counter: counter + action.payload.value,
        changes: changes + 1,
        previus: counter,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(CounterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
      <h2>Counter Reducer: </h2>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

interface CounterState {
  counter: number;
  previus: number;
  changes: number;
}
