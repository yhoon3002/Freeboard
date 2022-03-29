import styled from "@emotion/styled";
import { useState } from "react";

const QuizLevelUp = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const GrayStar = styled.div`
    width: 20px;
    height: 20px;
    background-image: url("/image/grayStar/grayStar.png");
    background-repeat: no-repeat;
    cursor: pointer;
  `;

  const YellowStar = styled.div`
    width: 20px;
    height: 20px;
    background-image: url() ("/image/yellowStar/yellowStar.png");
    cursor: pointer;
  `;

  const [isSelected, setIsSelected] = useState(false);

  const onClickStar = (e) => {
    setIsSelected(isSelected);
    e.target.value = isSelected;
  };

  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((el) => {
        return <GrayStar onClick={onClickStar} />;
      })}
    </Wrapper>
  );
};

export default QuizLevelUp;
