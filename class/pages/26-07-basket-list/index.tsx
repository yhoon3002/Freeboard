import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const BasketListPage = () => {
  const [basketItems, setBasketItems] = useState([]);

  // componentDidMount()
  // useEffect()를 안써주게 되면 localStorage를 못찾게 된다.
  // useEffect()대신 if(typeof window !== "undefined")를 써줘도 됨 -> 너무 많은 렌더링이 발생한다는 오류가 뜸
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <div>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
};

export default BasketListPage;
