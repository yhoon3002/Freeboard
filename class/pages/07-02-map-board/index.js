import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
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

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <MyRow key={el.number}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el.number}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
};

export default MapBoardPage;
