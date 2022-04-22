export default function EventLoopPage() {
  const onClickTimer = () => {
    // 즉석에서 처리 가능한 애들은 스택에서 처리가 됨
    // setTimeout()은 background로 빠짐
    // taskQueue에서 CallStack으로 못올라옴

    console.log("─────시작─────");
    setTimeout(() => {
      console.log("0초 뒤에 실행될 거에요");
    }, 0);

    let sum = 0;
    for (let i = 0; i < 9000000000; i += 1) {
      sum = sum + 1;
    }

    console.log("─────끝─────");
  };

  return <button onClick={onClickTimer}>setTimeout 실행시키기!!</button>;
}
