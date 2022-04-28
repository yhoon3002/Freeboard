import { FETCH_USED_ITEM_QUESTIONS } from "./MarketsCommentList.queries";
import MarketsCommentListPresenter from "./MarketsCommentList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function MarketsCommentListContainer() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <MarketsCommentListPresenter data={data} onLoadMore={onLoadMore} />;
}
