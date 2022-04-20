import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { IBoard } from "../../../src/commons/types/generated/types";

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

const BodyDiv = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid yellowgreen;
  font-size: 20px;
`;

export default function Basket() {
  const [isPut, setIsPut] = useState([]);

  useEffect(() => {
    const put = JSON.parse(localStorage.getItem("baskets") || "[]");
    setIsPut(put);
  }, []);

  return (
    <WrapperCol>
      <h1>나의 게시물 장바구니</h1>
      <WrapperRow>
        <BodyDiv>번호</BodyDiv>
        <BodyDiv>작성자</BodyDiv>
        <BodyDiv>제목</BodyDiv>
        <BodyDiv>내용</BodyDiv>
      </WrapperRow>
      {isPut.map((el: IBoard, index) => (
        <WrapperRow key={el._id}>
          <BodyDiv>{index + 1}</BodyDiv>
          <BodyDiv>{el.writer}</BodyDiv>
          <BodyDiv>{el.title}</BodyDiv>
          <BodyDiv>{el.contents}</BodyDiv>
        </WrapperRow>
      ))}
    </WrapperCol>
  );
}
