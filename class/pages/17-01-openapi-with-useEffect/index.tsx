import { useQuery } from "@apollo/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  // 페이지에 접속만 해도 axios를 받아오는 경우

  // result의 데이터를 저장할 state
  const [dogUrl, setDogUrl] = useState("");

  // axios.get으로 해당 주소의 데이터를 받아오고 result에 담아둠
  //   const result = await axios.get("https://dog.ceo/api/breeds/image/random");

  // 실행되자마자 setState()가 됨 -> setState()가 되면 리렌더링됨 -> 계속해서 반복
  //   setDogUrl(result.data.message);

  // 위의 반복을 방지하고자 useEffect() 사용
  useEffect(() => {
    const aaa = async () => {
      // aaa는 async를 사용하기 위해 임의로 만들어줌
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []); // ComponentDidMount 방식

  return (
    <>
      <div>오픈 API 연습 !</div>
      <img src={dogUrl} />
    </>
  );
}
