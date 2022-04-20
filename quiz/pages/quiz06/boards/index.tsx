import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Writer = styled.div`
  width: 150px;
`;

const Title = styled.div`
  width: 500px;
`;

const Contents = styled.div`
  width: 400px;
`;

const PutBoardButton = styled.button`
  color: white;
  background-color: blueviolet;
`;

export default function QuizFirst() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isPut, setIsPut] = useState([]);

  useEffect(() => {
    const put = JSON.parse(localStorage.getItem("baskets") || "[]");
    setIsPut(put);
  }, []);

  const onClickPutBoard = (el: IBoard) => () => {
    // console.log(el);

    // 기존 장바구니 가져오기
    // string 객체를 json 객체로 변환시켜준다.
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // (2-1) 3.[게시물담기] 버튼이 눌린 데이터를
    // 로컬스토리지에 객체 형태로 저장하기
    // __typename은 불필요한 데이터
    // 삭제
    if (isPut.some((put) => put._id === el._id)) {
      const tmp = baskets.filter((acc) => acc._id !== el._id);
      setIsPut(tmp);
      localStorage.setItem("baskets", JSON.stringify(tmp));
    } else {
      // 추가
      // json 객체를 string 객체로 변환시켜준다.
      setIsPut(baskets);
      const { __typename, ...rest } = el;
      baskets.push(rest);
      localStorage.setItem("baskets", JSON.stringify(baskets));
    }
  };

  return (
    <>
      {data?.fetchBoards.map((el: IBoard) => (
        <Wrapper key={el._id}>
          <Writer>{el.writer}</Writer>
          <Title>{el.title}</Title>
          <Contents>{el.contents}</Contents>
          <PutBoardButton onClick={onClickPutBoard(el)}>
            {isPut.some((put) => put._id === el._id)
              ? "담기취소"
              : "게시물담기"}
          </PutBoardButton>
        </Wrapper>
      ))}
    </>
  );
}
