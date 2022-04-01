// This Is For Board Comment Write Container

import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWritePresenter from "./BoardCommentWrite.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";

const BoardCommentWriteContainer = () => {
    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

    const onClickRegister = async () => {
        try {
            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer: writer,
                        password: password,
                        contents: contents,
                    },
                    boardId: String(router.query.boardId),
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
        } catch (error) {
            alert(error.message);
        }
    };

    const onChangeWriter = (e) => {
        setWriter(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeContents = (e) => {
        setContents(e.target.value);
    };

    return (
        <BoardCommentWritePresenter
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickRegister={onClickRegister}
            contents={contents}
        />
    );
};

export default BoardCommentWriteContainer;
