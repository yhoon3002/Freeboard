import CreateBoardUI from "./CreateBoard.presenter";
import { CREATE_BOARD } from "./CreateBoard.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateBoard() {
    const router = useRouter(); // 라우터 갖고오기!

    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD); // 세팅부분-2

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1"); // posts/1 부분을 엔드포인트라 함

        //실행부분
        try {
            const result = await callApi({
                variables: {
                    writer: myWriter, // $writer로
                    title: myTitle, // $title로
                    contents: myContents, // $contents로
                },
            }); // graphql 방식 / await를 안붙여주면 이거 안기다려주고 그냥 지나감
            console.log(result);
            console.log(result.data.createBoard.message);
            alert("게시글 등록에 성공!");
            alert("상세페이지로 이동해 볼까~?");
            router.push(
                `/homework/quiz-06-02-dynamic-routed/${result.data.createBoard.number}`
            ); // push 괄호안에 들어간 것을 템플릿 리터럴이라 부름

            // const banana = 3;
            // const apple = 2
            // console.log(`철수는 바나나를 ${banana}개 가지고 있고, 사과를 ${apple}개를 가지고 있습니다.`);
        } catch (error) {
            alert(error.message);
        }

        // setData(result.data.createBoard.message);
        // console.log(result.data.title);
        // setData(result.data.title);
    };

    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
    const [isActive, setIsActive] = useState(false);

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

    const onChangeContents = (event) => {
        setMyContents(event.target.value);

        if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <CreateBoardUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            isActive={isActive}
        />
    );
}
