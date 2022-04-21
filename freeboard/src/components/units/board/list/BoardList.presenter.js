// This Is For Board List Presenter Component

import * as S from "./BoardList.styles";

export default function BoardListPresenter(props) {
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
            <S.ThTitle>제목</S.ThTitle>
            <S.ThWriter>작성자</S.ThWriter>
            <S.ThDate>날짜</S.ThDate>
          </S.TRH>
        </S.TH>
        <S.Tbody>
          {props?.data?.fetchBoards.map((el, index) => (
            <S.TR key={props.data._id}>
              <S.Td>{10 - index}</S.Td>
              <S.TdTitle id={el._id} onClick={props.onClickMovetoDetail}>
                {el.title}
              </S.TdTitle>
              <S.Td>{el.writer}</S.Td>
              <S.Td>
                {el.createdAt.slice(0, 4)}.{el.createdAt.slice(5, 7)}.
                {el.createdAt.slice(8, 10)}
              </S.Td>
            </S.TR>
          ))}
        </S.Tbody>
      </table>
      <div>
        <S.BoardRegister onClick={props.onClickBoardRegister}>
          <S.PencilImg src="./image/pencil/pencil.png" />
          게시물 등록하기
        </S.BoardRegister>
      </div>
    </S.Wrapper>
  );
}
