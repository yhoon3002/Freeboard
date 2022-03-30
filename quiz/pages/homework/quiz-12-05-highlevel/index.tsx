import { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const Popup = styled.div`
  position: absolute;
  align-items: center;

  left: 50%;
  width: 400px;
  height: 170px;
  border: 2px solid black;
  background-color: #d3d3d3;
  transform: translate(-50%, 0%);
  z-index: 100;
`;

const HeadWrapper = styled.div`
  border-bottom: 1px solid black;
  padding-top: 10px;
  padding-left: 30px;
  padding-bottom: 10px;
`;

const PopupTitle = styled.span`
  text-align: left;

  font-size: 16px;
  font-weight: 800;
`;

const X = styled.span`
  margin-left: 250px;
  cursor: pointer;
`;

const PopupContents = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  font-size: 14px;
  font-weight: 600;
`;

const CancelButton = styled.button`
  margin-left: 280px;
`;

const OkButton = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  background-color: #6767df;
`;

const QuizFifth = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickModal = () => {
    setIsClicked(!isClicked);
  };

  const onClickX = () => {
    setIsClicked(false);
  };

  const onClickCancelButton = () => {
    setIsClicked(false);
  };

  const onClickOkButton = () => {
    setIsClicked(true);
  };

  return (
    <Wrapper>
      <button onClick={onClickModal}>Open Modal</button>
      {isClicked && (
        <Popup>
          <HeadWrapper>
            <PopupTitle>게시글 등록</PopupTitle>
            <X onClick={onClickX}>X</X>
          </HeadWrapper>
          <PopupContents>게시글이 등록되었습니다.</PopupContents>
          <CancelButton onClick={onClickCancelButton}>Cancel</CancelButton>
          <OkButton onClick={onClickOkButton}>Ok</OkButton>
        </Popup>
      )}
    </Wrapper>
  );
};

export default QuizFifth;
