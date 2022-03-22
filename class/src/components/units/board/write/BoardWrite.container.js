import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
    // false일 때 버튼 색 없고, true일 때 버튼 색 yellow로 바꿀 State 사용
    const [isActive, setIsActive] = useState(false);

    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD); // 세팅부분-2

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1"); // posts/1 부분을 엔드포인트라 함

        //실행부분
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

        if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value);

        if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    // setMyContents는 함수가 모두 끝나야 작동이 끝나게 됨
    // 따라서, 'ㅊ'을 입력한다해도 myContents에는 'ㅊ'이 입력되있는게 아님 (비어있음)
    // onChangeContents 함수가 끝나야 그 때 'ㅊ'이 입력되있음
    // 리렌더링의 최소화를 위해 이러한 방법을 사용함
    // + 글자가 입력되자마자 반응하기 위해서는 myContents를 event.target.value로 바꿔줘야함
    // 리렌더링 : 화면 재구성 (state가 바뀌면 화면이 다시 그려짐)

    const onChangeContents = (event) => {
        setMyContents(event.target.value);

        if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            isActive={isActive}
        />
    );
}
