import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }
  return <button onClick={handleButtonClick}>클릭 횟수: {count}</button>;
}

export default Counter;
