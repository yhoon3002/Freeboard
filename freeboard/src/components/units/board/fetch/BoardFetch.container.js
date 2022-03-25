// This Is For Board Detail Container Component

import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARD, UPDATE_BOARD } from "./BoardFetch.queries";
import BoardFetchPresenter from "./BoardFetch.presenter";

const BoardFetchContainer = (props) => {
    const router = useRouter();
    // console.log("boardId router 출력 : " + router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const [isOpen, isOpenAddressDetail] = useState(false);

    const onClickLocationImg = () => {
        isOpenAddressDetail((isOpen) => !isOpen);
    };

    const onClickToUpdate = async () => {
        router.push(`/boards/${router.query.boardId}/update`);
    };

    return (
        <BoardFetchPresenter
            isOpen={isOpen}
            onClickLocationImg={onClickLocationImg}
            onClickToUpdate={onClickToUpdate}
            data={data}
        />
    );
};

export default BoardFetchContainer;
