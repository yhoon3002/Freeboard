/* eslint-disable react/jsx-key */
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import { IBoard } from "../../../src/commons/types/generated/types";
import { useEffect, useState } from "react";
import { date } from "yup";

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

const WrapperCol = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const WrapperRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const WrapperRowHover = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  :hover {
    background-color: lightgray;
  }
`;

const BodyDiv = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid gray;
  font-size: 16px;
`;

export default function Boards() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isToday, setIsToday] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const already = JSON.parse(localStorage.getItem(DATE) || "[]");
    setIsToday(already);
  }, []);

  const onClickCart = (el) => (event) => {
    console.log(el);
    const today = JSON.parse(localStorage.getItem(DATE) || "[]");
    const tmp = isToday.filter((item: IBoard) => item._id === el._id);
    if (tmp.length === 1) {
      return;
    }
    const { __typename, ...rest } = el;
    today.push(rest);
    localStorage.setItem(DATE, JSON.stringify(today));
    setIsToday(today);
  };

  return (
    <WrapperRow>
      <WrapperCol>
        {data?.fetchBoards.map((el: IBoard) => (
          <WrapperRow key={el._id}>
            <WrapperRowHover onClick={onClickCart(el)}>
              <BodyDiv>{el.writer}</BodyDiv>
              <BodyDiv>{el.title}</BodyDiv>
              <BodyDiv>{el.contents}</BodyDiv>
            </WrapperRowHover>
          </WrapperRow>
        ))}
      </WrapperCol>
      <WrapperCol>
        <h2>오늘 본 상품</h2>
        {isToday.map((el: IBoard) => (
          <WrapperRow>
            <BodyDiv>{el.writer}</BodyDiv>
            <BodyDiv>{el.title}</BodyDiv>
            <BodyDiv>{el.contents}</BodyDiv>
          </WrapperRow>
        ))}
      </WrapperCol>
    </WrapperRow>
  );
}
