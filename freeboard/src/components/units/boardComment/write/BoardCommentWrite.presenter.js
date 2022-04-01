// This Is For Board Comment Write Presenter

import * as S from "./BoardCommentWrite.styles";

const BoardCommentWritePresenter = (props) => {
    return (
        <S.Wrapper>
            <S.Line></S.Line>
            <S.Comments>댓글</S.Comments>
            <S.CommenterInfo>
                <S.WriterInput
                    type="text"
                    placeholder="작성자"
                    onChange={props.onChangeWriter}
                />
                <S.PasswordInput
                    type="text"
                    placeholder="비밀번호"
                    onChange={props.onChangePassword}
                />
                {/* Rating 기능 넣기 */}
            </S.CommenterInfo>
            <S.CommentInputWrapper>
                <S.CommentInput
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    maxLength={100}
                    onChange={props.onChangeContents}
                />
                <S.CommentFooterWrapper>
                    <S.MaxLength>{props.contents.length}/100</S.MaxLength>
                    <S.RegisterButton onClick={props.onClickRegister}>
                        등록하기
                    </S.RegisterButton>
                </S.CommentFooterWrapper>
            </S.CommentInputWrapper>
        </S.Wrapper>
    );
};
export default BoardCommentWritePresenter;
