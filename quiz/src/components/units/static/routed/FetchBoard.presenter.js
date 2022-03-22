import { Welcome, Title, Writer, Contents } from "./FetchBoard.styles";

export default function FetchBoardUI(props) {
    return (
        <>
            <Welcome>
                {props.data?.fetchBoard?.number}번 게시글입니다
                {/* data && : 조건부 렌더링 */}
                {/* data? : 뒤에붙은 ?를 optional-chaining이라 함*/}
            </Welcome>
            <Title>{props.data?.fetchBoard?.title}</Title>
            <Writer>{props.data?.fetchBoard?.writer}</Writer>
            <Contents>{props.data?.fetchBoard?.contents}</Contents>
        </>
    );
}
