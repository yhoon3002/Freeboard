// This Is For Board Detail Container Component

import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import {
    FETCH_BOARD,
    DELETE_BOARD,
    LIKE_BOARD,
    DISLIKE_BOARD,
} from "./BoardFetch.queries";
import BoardFetchPresenter from "./BoardFetch.presenter";

const BoardFetchContainer = (props) => {
    const router = useRouter();
    // console.log("boardId router 출력 : " + router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: String(router.query.boardId) },
    });

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const [likeBoard] = useMutation(LIKE_BOARD);

    const [dislikeBoard] = useMutation(DISLIKE_BOARD);

    const onClickLikeImg = () => {
        likeBoard({
            variables: { boardId: String(router.query.boardId) },
            refetchQueries: [
                {
                    query: FETCH_BOARD,
                    variables: { boardId: router.query.boardId },
                },
            ],
        });
    };

    const onClickDislikeImg = () => {
        dislikeBoard({
            variables: { boardId: String(router.query.boardId) },
            refetchQueries: [
                {
                    query: FETCH_BOARD,
                    variables: { boardId: router.query.boardId },
                },
            ],
        });
    };

    const onClickToUpdate = async () => {
        router.push(`/boards/${router.query.boardId}/update`);
    };

    const onClickToList = async () => {
        router.push(`/boards`);
    };

    const onClickDelete = async () => {
        deleteBoard({
            variables: { boardId: router.query.boardId },
        });
        alert("게시글이 삭제 되었습니다!");
        router.push(`/boards`);
    };

    return (
        <BoardFetchPresenter
            onClickToUpdate={onClickToUpdate}
            onClickToList={onClickToList}
            onClickDelete={onClickDelete}
            onClickLikeImg={onClickLikeImg}
            onClickDislikeImg={onClickDislikeImg}
            data={data}
        />
    );
};

export default BoardFetchContainer;
