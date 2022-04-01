import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
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

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 100%;
  font-size: 20px;
`;

const MapBoardPage = () => {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (e) => {
    refetch({ page: Number(e.target.id) });
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
  };

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + startPage + " "}
        </span>
      ))}

      <span onClick={onClickNextPage}>다음페이지</span>

      {/* {[1, 2, 3].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} */}

      {/* 
       <span onClick={onClickPage} id="1">
         1
       </span>
       <span onClick={onClickPage} id="2">
         2
       </span>
       <span onClick={onClickPage} id="3">
         3
       </span> */}
    </div>
  );
};

export default MapBoardPage;
