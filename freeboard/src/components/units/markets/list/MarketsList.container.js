import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListPresenter from "./MarketsList.presenter";
import { FETCH_USED_ITEMS } from "./MarketsList.queries";

export default function MarketListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);

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

  return <MarketListPresenter data={data} onClickProduct={onClickProduct} />;
}
