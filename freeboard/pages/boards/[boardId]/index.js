// This Is For Board Detail Page

import BoardFetchContainer from "../../../src/components/units/board/fetch/BoardFetch.container";
import BoardCommentListContainer from "../../../src/components/units/boardComment/list/BoardCommentList.container";

const FreeBoardDetail = () => {
    return (
        <>
            <BoardFetchContainer />
            <BoardCommentListContainer />
        </>
    );
};

export default FreeBoardDetail;
