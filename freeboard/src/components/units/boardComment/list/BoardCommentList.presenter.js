// This Is For Board Comment List Presenter

import * as S from "./BoardCommentList.styles";

const BoardCommentListPresenter = () => {
    return (
        <S.Wrapper>
            <S.Line></S.Line>
            <S.Comments>댓글</S.Comments>
            <S.CommenterInfo>
                <S.WriterInput type="text" placeholder="작성자" />
                <S.PasswordInput type="text" placeholder="비밀번호" />
                {/* Rating 기능 넣기 */}
            </S.CommenterInfo>
            <S.CommentInputWrapper>
                <S.CommentInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
                <S.CommentFooterWrapper>
                    <S.MaxLength>{}/100</S.MaxLength>
                    <S.RegisterButton>등록하기</S.RegisterButton>
                </S.CommentFooterWrapper>
            </S.CommentInputWrapper>
            <div>{/* 댓글 커멘트 불러오기 */}</div>
        </S.Wrapper>
    );
};

export default BoardCommentListPresenter;
