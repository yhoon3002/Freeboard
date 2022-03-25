// 여기는 컨테이너 컴포넌트

import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    const [data, setData] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const onClickUpdate = async () => {
        const variables: IVariables = { number: Number(router.query.mynumber) };

        if (myWriter !== "") {
            variables.writer = myWriter;
        }
        if (myTitle !== "") {
            variables.title = myTitle;
        }
        if (myContents !== "") {
            variables.contents = myContents;
        }

        const result = await updateBoard({
            variables: variables,
        });
        alert("게시글 수정에 성공하였습니다.");
        router.push(`/09-01-boards/${router.query.mynumber}`); // ${ 뒤에 result.data.updateBoard.number 써도됨
    };

    const callGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer: myWriter,
                title: myTitle,
                contents: myContents,
            },
        });
        // console.log(result);
        // console.log(result.data.createBoard.message);
        // setData(result.data.createBoard.message);
        alert("게시글 등록에 성공하였습니다.");
        router.push(`/09-01-boards/${result.data.createBoard.number}`);
    };

    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setMyWriter(event.target.value);

        if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setMyTitle(event.target.value);

        if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
        />
    );
}
