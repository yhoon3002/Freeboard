// This Is For Board List Presenter Component

import * as S from "./BoardList.styles";

const BoardListPresenter = (props) => {
    return (
        <S.Wrapper>
            <S.SearchTool>
                <input type="text" placeholder="제목을 검색해주세요."></input>
                <input
                    type="text"
                    placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
                ></input>
                <S.SearchButton>검색하기</S.SearchButton>
            </S.SearchTool>
            <table>
                <thead>
                    <S.TR>
                        <S.ThNumber>번호</S.ThNumber>
                        <S.Th>제목</S.Th>
                        <S.Th>작성자</S.Th>
                        <S.Th>날짜</S.Th>
                    </S.TR>
                </thead>
                <tbody>
                    {props?.data?.fetchBoards.map((el, index) => (
                        <S.TR key={props.data._id}>
                            <S.Td>{10 - index}</S.Td>
                            <S.Td>{el.title}</S.Td>
                            <S.Td>{el.writer}</S.Td>
                            <S.Td>{el.createdAt}</S.Td>
                        </S.TR>
                    ))}
                </tbody>
            </table>
        </S.Wrapper>
    );
};

export default BoardListPresenter;
