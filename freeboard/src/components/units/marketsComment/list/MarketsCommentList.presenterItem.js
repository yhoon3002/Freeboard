import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTIONS } from "./MarketsCommentList.queries";
import * as S from "./MarketsCommentList.styles";

export default function MarketsCommentListPresenterItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  // 모달에 사용
  // const [modalTitle, setModalTitle] = useState("삭제하시겠습니까?");
  // const [okText, setOkText] = useState("네");
  // const [cancelText, setCancelText] = useState("아니오");
  // const [isClickedModal, setIsClickedModal] = useState(false);
  // const [password, setPassword] = useState("");

  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  // const [boardCommentId, setBoardCommentId] = useState("");

  // 모달 삭제하기 눌렀을 때
  // const onClickOk = async () => {
  //   try {
  //     await deleteBoardComment({
  //       variables: {
  //         password: password,
  //         boardCommentId: props.el?._id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENTS,
  //           variables: { boardId: router.query.boardId },
  //         },
  //       ],
  //     });
  //     setIsClickedModal(false);
  //     setBoardCommentId("");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // 모달 아니오 버튼 눌렀을 때
  // const onClickCancel = () => {
  //   setIsClickedModal((prev) => !prev);
  // };

  // // 댓글 삭제 이미지 눌렀을 때
  // const onClickXImage = (e) => {
  //   setIsClickedModal(true);
  //   if (e.target) setBoardCommentId(e.target.id);
  // };

  // // 모달에서 "네"를 누르고 비밀번호 입력할 때 사용
  // const onChangeDeletePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // // 댓글 수정 이미지 눌렀을 때
  // const onClickPencilImage = (e) => {
  //   setIsEdit(true);
  // };

  return (
    <>
      {/* {isClickedModal && (
        <Modal
          visible={true}
          title={modalTitle}
          onOk={onClickOk}
          onCancel={onClickCancel}
          cancelText={cancelText}
          okText={okText}
        >
          <div>비밀번호를 입력하세요: </div>
          <input type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )} */}
      {/* {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )} */}
      {!isEdit && (
        <S.Wrapper>
          <S.CommentWrapper>
            <S.CommentLeft>
              <S.ProfileImg src={props.el?.user.picture}></S.ProfileImg>
              <S.Writer>{props.el?.user.name}</S.Writer>
              <S.Contents>{props.el?.contents}</S.Contents>
              {/* <S.Pencil
                src="/image/pencil/pencil.png"
                id={props.el?._id}
                onClick={onClickPencilImage}
              ></S.Pencil>
              <S.XImage
                src="/image/xsign/xsign.png"
                id={props.el?._id}
                onClick={onClickXImage}
              ></S.XImage> */}
            </S.CommentLeft>
            <div>
              {props.el?.createdAt.slice(0, 4)}.
              {props.el?.createdAt.slice(5, 7)}.
              {props.el?.createdAt.slice(8, 10)}
            </div>
          </S.CommentWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
