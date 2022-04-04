// This Is For Board Detail Page
import BoardFetchContainer from "../../../src/components/units/board/fetch/BoardFetch.container";
import BoardCommentListContainer from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWriteContainer from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

const FreeBoardDetail = () => {
    return (
        <>
            <BoardFetchContainer />
            <BoardCommentWriteContainer />
            <BoardCommentListContainer />
        </>
    );
};

export default FreeBoardDetail;
