import * as S from "./MarketsCommentWrite.styles";

export default function MarketsCommentWritePresenter(props) {
  return (
    <S.Wrapper>
      <S.InquireWrapper>
        <S.InquireImage src="/image/inquire/inquire.png" />
        <S.Inquire>{props.isEdit ? "수정하기" : "문의하기"}</S.Inquire>
      </S.InquireWrapper>
      <S.CommentInputWrapper>
        <S.CommentInput
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          onChange={props.onChangeContents}
        />
        <S.CommentFooterWrapper>
          <S.MaxLength>{/* {props.contents.length}/100 */}</S.MaxLength>
          <S.RegisterButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickRegister}
          >
            {props.isEdit ? "수정하기" : "문의하기"}
          </S.RegisterButton>
        </S.CommentFooterWrapper>
      </S.CommentInputWrapper>
    </S.Wrapper>
  );
}
