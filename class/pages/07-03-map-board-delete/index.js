import { useMutation } from "@apollo/client";
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

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    width: 20%;
`;

const MapBoardPage = () => {
    const { data } = useQuery(FETCH_BOARDS);
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickDelete = (event) => {
        deleteBoard({
            variables: { number: Number(event.target.id) },
            refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                // map((el, index)) 쓰고 key를 index로 주게되면 이상하게 삭제됨 왜 why? 자바스크립트에서 index4를 지웟지만 그 다음 4번이있기때문!
                <Row key={el.number}>
                    <Column>
                        <input type="checkbox" />
                    </Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>
                            삭제
                        </button>
                    </Column>
                </Row>
            ))}
        </div>
    );
};

export default MapBoardPage;
