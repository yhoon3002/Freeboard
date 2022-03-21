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

const QuizThird = () => {
    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD);

    const callGraphqlApi = async () => {
        const result = await callApi({
            variables: {
                writer: myWriter,
                title: myTitle,
                contents: myContents,
            },
        });
        console.log(result);
        setData(result.data.createBoard.message);
    };

    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

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
        <div>
            작성자 : <input type="text" onChange={onChangeWriter} />
            <br />
            제목 : <input type="text" onChange={onChangeTitle} />
            <br />
            내용 : <input type="text" onChange={onChangeContents} />
            <br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    );
};

export default QuizThird;
