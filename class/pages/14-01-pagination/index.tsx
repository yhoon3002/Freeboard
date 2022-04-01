import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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
  //    요로코롱 하면 data를 요청하고 받을 때까지 기다려주지 않기 때문에
  //    data에는 undefined가 들어와짐!
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (e) => {
    refetch({ page: Number(e.target.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}

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
