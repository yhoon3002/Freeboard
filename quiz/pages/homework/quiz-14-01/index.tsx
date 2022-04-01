import Board from "../../../src/components/units/quiz14-01/Board";
import Pagination from "../../../src/components/units/quiz14-01/Pagination";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const MapBoardPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const [current, setCurrent] = useState(1);

  return (
    <div>
      <Board data={data} />
      <Pagination
        refetch={refetch}
        lastPage={lastPage}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default MapBoardPage;
