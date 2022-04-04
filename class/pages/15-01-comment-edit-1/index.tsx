// 여러개 복사 x, 한개만 복사 가능

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";

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

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const MapBoardPage = () => {
  // 요로코롱 하면 data를 요청하고 받을 때까지 기다려주지 않기 때문에
  // data에는 undefined가 들어와짐!
  const { data } = useQuery(FETCH_BOARDS);

  const [myIndex, setMyIndex] = useState(-1);

  const onClickEdit = (e) => {
    setMyIndex(Number(e.target.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
            <MyRow>
              <MyColumn>
                <input type="checkbox" />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {index === myIndex && <div>수정하기화면입니다</div>}
        </div>
      ))}
    </div>
  );
};

export default MapBoardPage;
