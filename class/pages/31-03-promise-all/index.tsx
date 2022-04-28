export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise 시작 !!"); // 시간을 체크하는 방법

    // ↓ resolve가 실행될때까지 await을 한다.
    // 각각은 uploadFile에 해당됨
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });

    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });

    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });

    console.log(result3);

    console.timeEnd("Promise 시작 !!");
    // ↑ console.time 부터 얼마나 걸렸는지 확인
    // ↑ 총 6초 나와야 정상 !
  };

  const onClickPromiseAll = async () => {
    // ⑴ 하나하나씩 확인하는 방법
    // console.time("Promise.all 시작 !!");
    // // ↓ Promise.all() 안에는 배열이 들어감
    // // ↓ 3개 동시에 요청이 되고, 따로따로 받아오지만, 결과적으로는 기다리는 것을 한번만 하게 됨
    // // ↓ result에는 ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"] 가 저장됨
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);

    // console.log(result);

    // console.timeEnd("Promise.all 시작 !!");
    // ↑ 총 3초가 걸림

    //
    //
    // ⑵ 한방에 확인하는 방법
    console.time("Promise.all 시작 !!");

    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );

    console.log(result);
    console.timeEnd("Promise.all 시작 !!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기 !!</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기 !!</button>
    </div>
  );
}
