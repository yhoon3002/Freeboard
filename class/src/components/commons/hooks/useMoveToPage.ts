import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitiedPageState } from "../../src/commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitiedPageState);

  // 이렇게 HOF를 써주게 되면 onClickMoveTo(Board / Market / MyPage) 이렇게 3개나 안써줘도 됨
  const onClickMoveToPage = (path) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}
