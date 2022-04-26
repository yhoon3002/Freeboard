import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListPresenter from "./MarketsList.presenter";
import { FETCH_USED_ITEMS } from "./MarketsList.queries";

export default function MarketListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onClickProduct = (el) => (e) => {
    router.push(`/markets/${e.currentTarget.id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      return;
    }

    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);

    if (baskets.length > 3) {
      baskets.shift();
    }

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListPresenter
      data={data}
      onClickProduct={onClickProduct}
      onLoadMore={onLoadMore}
    />
  );
}
