import InfiniteScroll from "react-infinite-scroller";
import MarketsCommentListPresenterItem from "./MarketsCommentList.presenterItem";

export default function MarketsCommentListPresenter(props) {
  if (!props.data) return <div />;

  return (
    <InfiniteScroll pageStart={0} loadMore={props.loadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <MarketsCommentListPresenterItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
