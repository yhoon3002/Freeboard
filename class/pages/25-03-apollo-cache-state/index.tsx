import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  // 가장 가까운 괄호에 async 붙여주기
  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    // 서비스가 커질수록 많은 사람들이 사용하므로 refetch보다 이게 더 효율적임
    // 무한스크롤 페이지에서 많이 사용함
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // el._id를 직접 꺼내올 수 없게되있어서 readField라는 것을 사용해서 꺼내야함
              // 따라서, el._id가 안되므로, reaField에서 꺼내기
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              // 이 prev에서 원하는 부분만 지워주고, 남은 9개만 return 해주면 됨
              // 따라서, filteredPrev는 9개가 됨

              return [...filteredPrev];
            },
          },
        });
      }, // 캐시를 직접 업데이트 해달라는 의미
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      // {data} : useQuery를 구조분해할당으로 받아옴
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
              // 새로 등록한 글 1개 + prev 10개, 총 11개의 글이 만들어지게 됨
              // 따라서, 객체안에 글 11개가 들어가있음
              // 이렇게 리턴하게 되면, globalState에 있는 fetchBoard가 바뀌게 됨
            },
          },
        });
        // cache에 있는것을 직접 수정할 것임!
        // 어떤 field를 수정할지 정해주어야 함 ex) fetchProduct, fetchBoard
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// const aaa = "철수"
// function onClickAAA(aaa) {
//
// }

// onClickAAA("철수");

// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){
//   console.log(name)
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child)

// const name = "철수";
// const age = 13;
// const school = "다람쥐초등학교";
// onClickAAA({ name, school }); // 객체는 이름이 중요, 순서가 중요하지 않음

// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, school)
