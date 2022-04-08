// import axios from "axios";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

// 세팅부분
// 요로캐 하면 통신 절감 효과, 효율적인 API 요청(묶음 배송)
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD); // 세팅부분-2

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1"); // posts/1 부분을 엔드포인트라 함

    // 실행부분
    const result = await callApi({
      variables: {
        writer: myWriter, // $writer로
        title: myTitle, // $title로
        contents: myContents, // $contents로
      },
    }); // await를 안붙여주면 이거 안기다려주고 그냥 지나감
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);

    // console.log(result.data.title);
    // setData(result.data.title);
  };

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  // 이벤트 핸들러 함수
  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <>
      {/* <div>{data}</div> */}
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
    </>
  );
}
