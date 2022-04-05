// import axios from "axios";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [callApi] = useMutation(CREATE_BOARD);

  //   const [myWriter, setMyWriter] = useState("");
  //   const [myTitle, setMyTitle] = useState("");
  //   const [myContents, setMyContents] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  //   const callGraphqlApi = async () => {
  //     const result = await callApi({
  //       variables: {
  //         writer: inputs.writer,
  //         title: inputs.title,
  //         contents: inputs.contents,
  //       },
  //     });
  //     console.log(result);
  //     console.log(result.data.createBoard.message);
  //     setData(result.data.createBoard.message);
  //   };

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { ...inputs },
    });
    setData(result.data.createBoard.message);
  };

  const onChangeInputs = (e) => {
    setInputs({
      //   writer: inputs.writer,
      //   title: inputs.title,
      //   contents: inputs.contents,
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
    </>
  );
}
