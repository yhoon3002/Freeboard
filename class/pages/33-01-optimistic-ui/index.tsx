import { useMutation, useQuery } from "@apollo/client";
import { gql } from "graphql-request";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6267b934a8255b002988ccde" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = async () => {
    await likeBoard({
      variables: { boardId: "6267b934a8255b002988ccde" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6267b934a8255b002988ccde" },
      //   },
      // ],
      optimisticResponse: {},
      update(cache, { data }) {
        cache.writeQuery({
          // FETCH_BOARD 데이터를 직접 바꿔치기
          query: FETCH_BOARD,
          variables: { boardId: "6267b934a8255b002988ccde" },
          data: {
            // _id와 __typename은 필수입력
            fetchBoard: {
              _id: "6267b934a8255b002988ccde",
              __typename: "Board",
              likeCount: data.likeBoard, // 응답 데이터를 의미
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재카운트(좋아요): {}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
