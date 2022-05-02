import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketsCommentWriteContainer from "../write/MarketsCommentWrite.container";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./MarketsCommentList.queries";
import * as S from "./MarketsCommentList.styles";

export default function MarketsCommentListPresenterItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteUsedItemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const [useditemQuestionId, setUseditemQuestionId] = useState("");

  const onClickXImage = async () => {
    try {
      await deleteUsedItemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemQuestionId: router.query.useditemQuestionId },
          },
        ],
      });
      setUseditemQuestionId("");
    } catch (error) {
      alert(error.message);
    }
  };

  // 댓글 수정 이미지 눌렀을 때
  const onClickPencilImage = () => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit && (
        <MarketsCommentWriteContainer
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
      {!isEdit && (
        <S.Wrapper>
          <S.CommentWrapper>
            <S.ProfileImg
              src={
                props.el?.user.picture
                  ? props.el?.user.picture
                  : "/image/profile/profile2.png"
              }
            ></S.ProfileImg>
            <S.CommentLeft>
              <S.WriterContents>
                <S.Writer>{props.el?.user.name}</S.Writer>
                <S.Contents>{props.el?.contents}</S.Contents>
                <S.CreatedDate>
                  {props.el?.createdAt.slice(0, 4)}.
                  {props.el?.createdAt.slice(5, 7)}.
                  {props.el?.createdAt.slice(8, 10)}
                </S.CreatedDate>
              </S.WriterContents>
            </S.CommentLeft>
            <S.Pencil
              onClick={onClickPencilImage}
              src="/image/pencil/pencil.png"
              id={props.el?._id}
            ></S.Pencil>
            <S.XImage
              src="/image/xsign/xsign.png"
              id={props.el?._id}
              onClick={onClickXImage}
            ></S.XImage>
            {/* {props.el._id === useditemQuestionId ? (
              <>
                <S.Pencil
                  src="/image/pencil/pencil.png"
                  id={props.el?._id}
                ></S.Pencil>
                <S.XImage
                  src="/image/xsign/xsign.png"
                  id={props.el?._id}
                  onClick={onClickXImage}
                ></S.XImage>
              </>
            ) : (
              <div></div>
            )} */}
          </S.CommentWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
