// This Is For Board Comment List Container

import {
    DELETE_BOARD_COMMENT,
    FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import BoardCommentListPresenter from "./BoardCommentList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const BoardCommentListContainer = () => {
    const router = useRouter();

    const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId) },
    });

    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
            variables: {
                page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult?.fetchBoardComments)
                    return { fetchBoardComments: [...prev.fetchBoardComments] };
                return {
                    fetchBoardComments: [
                        ...prev.fetchBoardComments,
                        ...fetchMoreResult.fetchBoardComments,
                    ],
                };
            },
        });
    };

    return <BoardCommentListPresenter data={data} onLoadMore={onLoadMore} />;
};

export default BoardCommentListContainer;
