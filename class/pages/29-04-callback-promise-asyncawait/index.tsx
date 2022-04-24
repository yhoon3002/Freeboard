import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 랜덤 숫자

      const bbb = new XMLHttpRequest();

      bbb.open("get", `https://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.UserId;

        const ccc = new XMLHttpRequest();

        ccc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res); // 최종 결과값 !
        });
      });
    }); // load가 다 되면 뒷 인자의 함수를 실행시켜줘 라는 뜻
  };

  // new Promise((resolve, reject) => {
  //   // 외부 요청 코드

  //   // 성공
  //   resolve();

  //   // 실패
  //   reject("에러발생 !!");
  // })
  //   .then((res) => {
  //     res;
  //   })
  //   .catch((err) => {
  //     err;
  //   });

  // Callback 지옥을 해결하기 위해 나온 것이 Promise임
  // Callback 지옥은 없지만 밑으로 쭉 내려간다해서 promise chaining이 있음
  const onClickPromise = () => {
    console.log("여기는 1번입니다 !!");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는 2번입니다 !!");
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번입니다 !!");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번입니다 !!");
        console.log(res);
      });
    console.log("여기는 5번입니다 !!");
  };
  // "여기는 1번입니다" -> "여기는 5번입니다" -> "여기는 2번입니다" -> "여기는 3번입니다" -> "여기는 4번입니다" 로 콘솔이 찍힘

  // promise를 기다리는게 await 임
  // 따라서, promise가 없다면 await을 쓰나마나임
  // 비동기 실행하고 싶다고 async await 쓴다고 해결되는게 아님 !
  // 굉장히 명확하다 !
  // 순서가 보장이되어있다 !
  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200"); // aaa가 끝나게 되면 bbb를 요청

    const bbb = await axios.get(`https://koreanjson.com/posts/${num}`); // bbb가 끝나게 되면 ccc를 요청

    const ccc = await axios.get(`https://koreanjson.com/posts/${num}`);
  };

  return (
    <>
      <button onClick={onClickCallback}>Callback 요청하기 !</button>
      <button onClick={onClickPromise}>Promise 요청하기 !</button>
      <button onClick={onClickAsyncAwait}>Async-Await 요청하기 !</button>
    </>
  );
}
