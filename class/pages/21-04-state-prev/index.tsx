import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  // 1. 화살표함수로 사용했을 때
  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  // 2. 함수선언식으로 바꿨을 때
  const onClickCounter2 = () => {
    setCount(function (prev) {
      // 로직 추가 가능
      // if(), for() 등등 사용 가능
      return prev + 1;
    });
  };

  // 3. 매개변수 바꿔보기
  const onClickCounter3 = () => {
    setCount((abcedfu) => abcedfu + 1);
  };

  return (
    <>
      <div>현재 카운트 : {count}</div>
      <button onClick={onClickCounter}>
        1번 방법: 화살표 함수로 사용했을 때 카운트 증가!!!
      </button>
      <br />
      <button onClick={onClickCounter2}>
        2번 방법: 함수선언식으로 바꿨을 때 카운트 증가!!!
      </button>
      <br />
      <button onClick={onClickCounter3}>
        3번 방법: 매개변수 바꿔보기 카운트 증가!!!
      </button>
    </>
  );
}
