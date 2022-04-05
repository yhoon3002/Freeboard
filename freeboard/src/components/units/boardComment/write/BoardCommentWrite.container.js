// This Is For Board Comment Write Container

import {
    CREATE_BOARD_COMMENT,
    UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWritePresenter from "./BoardCommentWrite.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";

const BoardCommentWriteContainer = (props) => {
    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [star, setStar] = useState(0);

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

    const onClickRegister = async () => {
        try {
            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer: writer,
                        password: password,
                        contents: contents,
                        rating: star,
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
        alert("등록완료!");
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

    const onChangeStar = (value) => {
        setStar(value);
    };

    const onClickUpdate = async () => {
        if (!contents) {
            alert("내용이 수정되지 않았습니다.");
            return;
        }
        if (!password) {
            alert("비밀번호가 입력되지 않았습니다.");
            return;
        }

        try {
            if (!props.el?._id) return;

            const updateBoardCommentInput = {};
            if (contents) updateBoardCommentInput.contents = contents;
            if (star !== props.el?.rating)
                updateBoardCommentInput.rating = star;

            await updateBoardComment({
                variables: {
                    updateBoardCommentInput,
                    password: password,
                    boardCommentId: props.el?._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            props.setIsEdit?.(false);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <BoardCommentWritePresenter
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickRegister={onClickRegister}
            onClickUpdate={onClickUpdate}
            onChangeStar={onChangeStar}
            isEdit={props.isEdit}
            el={props.el}
            contents={contents}
        />
    );
};

export default BoardCommentWriteContainer;
