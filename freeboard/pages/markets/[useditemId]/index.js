// This Is For Markets Detail Page
import MarketsDetailContainer from "../../../src/components/units/markets/detail/MarketsDetail.container";
import MarketsCommentListContainer from "../../../src/components/units/marketsComment/list/MarketsCommentList.container";
import MarketsCommentWriteContainer from "../../../src/components/units/marketsComment/write/MarketsCommentWrite.container";

export default function MarketsDetail() {
  return (
    <>
      <MarketsDetailContainer />
      <MarketsCommentWriteContainer />
      <MarketsCommentListContainer />
    </>
  );
}
