// This Is For Board Comment List Presenter

import BoardCommentListPresenterItem from "./BoardCommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

const BoardCommentListPresenter = (props) => {
    if (!props.data) return <div />;
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
        >
            {props.data?.fetchBoardComments.map((el) => (
                <BoardCommentListPresenterItem key={el._id} el={el} />
            ))}
        </InfiniteScroll>
    );
};

export default BoardCommentListPresenter;
