import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

const staticRoutedPage = () => {
  // 요로코롱 하면 data를 요청하고 받을 때까지 기다려주지 않기 때문에
  // data에는 undefined가 들어와짐!
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { number: 2 },
    }
  );
  console.log(data);

  return (
    <div>
      <div>
        {data?.fetchBoard?.number}번 게시글에 오신 것을 환영합니다!!!
        {/* data && : 조건부 렌더링 */}
        {/* data? : 뒤에붙은 ?를 optional-chaining이라 함 */}
      </div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
    </div>
  );
};

export default staticRoutedPage;
