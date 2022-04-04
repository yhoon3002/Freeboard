// This Is For Board Comment List Container

import {
    DELETE_BOARD_COMMENT,
    FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import BoardCommentListPresenter from "./BoardCommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useState } from "react";

const BoardCommentListContainer = () => {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId) },
    });

    // 댓글 삭제 gql
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
    const [boardCommentId, setBoardCommentId] = useState("");

    // 모달에 사용
    const { confirm } = Modal;
    const [modalTitle, setModalTitle] = useState("삭제하시겠습니까?");
    const [okText, setOkText] = useState("네");
    const [cancelText, setCancelText] = useState("아니오");
    const [isClickedModal, setIsClickedModal] = useState(false);
    const [password, setPassword] = useState("");

    // 모달 삭제하기 눌렀을 때
    const onClickOk = async () => {
        try {
            await deleteBoardComment({
                variables: {
                    password: password,
                    boardCommentId: boardCommentId,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            setIsClickedModal(false);
            setBoardCommentId("");
        } catch (error) {
            alert(error.message);
        }
    };

    // 모달 아니오 버튼 눌렀을 때
    const onClickCancel = () => {
        setIsClickedModal((prev) => !prev);
    };

    // 댓글 삭제 이미지 눌렀을 때
    const onClickXImage = (e) => {
        setIsClickedModal(true);
        if (e.target) setBoardCommentId(e.target.id);
    };

    // 모달에서 "네"를 누르고 비밀번호 입력할 때 사용
    const onChangeDeletePassword = (e) => {
        setPassword(e.target.value);
    };

    // 댓글 수정 이미지 눌렀을 때
    const onClickPencilImage = (e) => {};

    return (
        <BoardCommentListPresenter
            data={data}
            onClickXImage={onClickXImage}
            onClickOk={onClickOk}
            onClickCancel={onClickCancel}
            onChangeDeletePassword={onChangeDeletePassword}
            onClickPencilImage={onClickPencilImage}
            isClickedModal={isClickedModal}
            confirm={confirm}
            cancelText={cancelText}
            okText={okText}
            modalTitle={modalTitle}
            password={password}
        />
    );
};

export default BoardCommentListContainer;
