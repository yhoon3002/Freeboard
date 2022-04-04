// 여러개 복사 가능

import { useQuery, gql } from "@apollo/client";
import BoardCommentItem from "../../src/components/units/board/15-03-board-comment";

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

const MapBoardPage = () => {
  // 요로코롱 하면 data를 요청하고 받을 때까지 기다려주지 않기 때문에
  // data에는 undefined가 들어와짐!

  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const onClickEdit = (e) => {
  //   const aaa = myIndex;
  //   aaa[e.target.id] = true;
  //   console.log(aaa);

  //   setMyIndex([...aaa]);
  // };

  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
};

export default MapBoardPage;
