import { Component, createRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

interface IState {
  count: number;
}

// 컴포넌트 기능을 가진 class
export default function CounterPage() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(99);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("Mounted !!");
  //   // 포커스 깜빡임
  //   this.inputRef.current?.focus();
  // }

  // useEffect(() => {
  //   console.log("Mounted !!");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // componentDidUpdate() {
  //   console.log("Updated & Rerendered !!");
  // }

  useEffect(() => {
    console.log("Updated & Rerendered !!");
  });

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("Component Disappeared !!");
  //   // 채팅방 나가기
  //   // api 요청
  // }

  // useEffect(() => {
  //   return () => {
  //     console.log("Component Disappeared !!");
  //   };
  // }, []);

  // 4. DidMount와 WillUnmount 합침 !!
  useEffect(() => {
    console.log("Mounted !!");
    inputRef.current?.focus();

    return () => {
      console.log("Component Disappeard !!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예 - 1
  // 이렇게 사용하면 state가 바뀌기 전에 한번 렌더링 되고, state가 바뀌고 나서 한번 더 렌더링 됨
  // 따라서, 불필요한 렌더링을 하게됨
  useEffect(() => {
    setCount(10);
  }, []);

  // 5. useEffect의 잘못된 사용 예 - 2
  // 무한루프에 빠질 수 있음
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const onClickCounter = () => {
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,

    setCount((prev) => prev + 1);
  };

  const onClickExit = () => {
    router.push("/");
  };

  console.log("나는 언제 실행돼 ??");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>Present Count : {count}</div>
      <button onClick={onClickCounter}>Count Up</button>
      <button onClick={onClickExit}>나가기</button>
    </div>
  );
}
