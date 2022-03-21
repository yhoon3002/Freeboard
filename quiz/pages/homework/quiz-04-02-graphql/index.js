import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
    mutation {
        createBoard(
            writer: "임영훈"
            title: "오늘 확진자 나옴 ㅠㅠ"
            contents: "난 다행히 음성나옴!"
        ) {
            _id
            number
            message
        }
    }
`;

const QuizSecond = () => {
    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD);

    const callGraphqlApi = async () => {
        const result = await callApi();

        // 2번. 등록한 데이터를 console.log()로 출력하기
        console.log(result);
        setData(result.data.createBoard.message);
    };
    return (
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    );
};

export default QuizSecond;
