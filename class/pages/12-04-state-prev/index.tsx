import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((prev) => prev + 1);

    setCount((prev) => prev + 3);

    setCount((prev) => prev + 6);
  };

  return (
    <div>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCount}>카운트 올리기</button>
    </div>
  );
};

export default StatePrevPage;
