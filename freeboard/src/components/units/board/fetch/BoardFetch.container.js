// This Is For Board Detail Container Component

import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardFetch.queries";
import BoardFetchPresenter from "./BoardFetch.presenter";

const BoardFetchContainer = (props) => {
    const router = useRouter();
    // console.log("boardId router 출력 : " + router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const [isOpen, isOpenAddressDetail] = useState(false);

    const onClickLocationImg = () => {
        isOpenAddressDetail((isOpen) => !isOpen);
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
            isOpen={isOpen}
            onClickLocationImg={onClickLocationImg}
            onClickToUpdate={onClickToUpdate}
            onClickToList={onClickToList}
            onClickDelete={onClickDelete}
            data={data}
        />
    );
};

export default BoardFetchContainer;
