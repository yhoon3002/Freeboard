// import axios from "axios";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

// 세팅부분
const CREATE_BOARD = gql`
    mutation {
        createBoard(writer: "임영훈", title: "배고파", contents: "런치 타임") {
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

        //실행부분
        const result = await callApi(); // await를 안붙여주면 이거 안기다려주고 그냥 지나감
        console.log(result);
        console.log(result.data.createBoard.message);
        setData(result.data.createBoard.message);

        // console.log(result.data.title);
        // setData(result.data.title);
    };

    return (
        <>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
        </>
    );
}
