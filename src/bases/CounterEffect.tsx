import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(3);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prevCounter: number) =>
      Math.min(prevCounter + 1, MAXIMUN_COUNT)
    );
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log("se fue a la verga");

    const tl = gsap.timeline();
    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease-out",
    }).to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: "bounce-out",
    });
  }, [counter]);

  return (
    <>
      <h2>Counter Effect:</h2>
      <h3 ref={counterElement}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
