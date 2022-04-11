// This Is For Board List Presenter Component

import * as S from "./BoardList.styles";
import Pagination01Container from "../../../commons/pagination/01/Pagination01.conatiner";

const BoardListPresenter = (props) => {
    return (
        <S.Wrapper>
            <S.SearchTool>
                <div>
                    <S.SearchImg src="image/search/search.png" />
                    <S.SearchTitle
                        type="text"
                        placeholder="제목을 검색해주세요."
                    ></S.SearchTitle>
                </div>
                <S.SearchDate
                    type="text"
                    placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
                ></S.SearchDate>
                <S.SearchButton>검색하기</S.SearchButton>
            </S.SearchTool>
            <table>
                <S.TH>
                    <S.TRH>
                        <S.ThNumber>번호</S.ThNumber>
                        <S.Th>제목</S.Th>
                        <S.Th>작성자</S.Th>
                        <S.Th>날짜</S.Th>
                    </S.TRH>
                </S.TH>
                <tbody>
                    {props?.data?.fetchBoards.map((el, index) => (
                        <S.TR key={props.data._id}>
                            <S.Td>{10 - index}</S.Td>
                            <S.Td
                                id={el._id}
                                onClick={props.onClickMovetoDetail}
                            >
                                {el.title}
                            </S.Td>
                            <S.Td>{el.writer}</S.Td>
                            <S.Td>
                                {el.createdAt.slice(0, 4)}.
                                {el.createdAt.slice(5, 7)}.
                                {el.createdAt.slice(8, 10)}
                            </S.Td>
                        </S.TR>
                    ))}
                </tbody>
            </table>
        </S.Wrapper>
    );
};

export default BoardListPresenter;
