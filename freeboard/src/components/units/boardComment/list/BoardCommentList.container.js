// This Is For Board Comment List Container

import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import BoardCommentListPresenter from "./BoardCommentList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const BoardCommentListContainer = () => {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId) },
    });

    return <BoardCommentListPresenter data={data} />;
};

export default BoardCommentListContainer;
