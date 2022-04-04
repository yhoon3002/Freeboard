// This Is For Board Comment List Presenter

import * as S from "./BoardCommentList.styles";
import { Modal, Button, Space } from "antd";

const BoardCommentListPresenter = (props) => {
    return (
        <>
            {props.isClickedModal && (
                <Modal
                    visible={true}
                    title={props.modalTitle}
                    onOk={props.onClickOk}
                    onCancel={props.onClickCancel}
                    cancelText={props.cancelText}
                    okText={props.okText}
                >
                    <div>비밀번호를 입력하세요: </div>
                    <input
                        type="password"
                        onChange={props.onChangeDeletePassword}
                    />
                </Modal>
            )}
            <S.Wrapper>
                {props.data?.fetchBoardComments.map((el) => (
                    <S.CommentWrapper key={el._id}>
                        <S.CommentLeft>
                            <S.ProfileImg src="/image/profile/profile2.png"></S.ProfileImg>
                            <S.WriterStarWrapper>
                                <S.WriterStar>
                                    <S.Writer>{el.writer}</S.Writer>
                                    <S.Star value={el.rating} disabled></S.Star>
                                </S.WriterStar>
                                <div>{el.contents}</div>
                            </S.WriterStarWrapper>
                            <S.Pencil
                                src="/image/pencil/pencil.png"
                                id={el._id}
                                onClick={props.onClickPencilImage}
                            ></S.Pencil>
                            <S.XImage
                                src="/image/xsign/xsign.png"
                                id={el._id}
                                onClick={props.onClickXImage}
                            ></S.XImage>
                        </S.CommentLeft>
                        <div>
                            {el.createdAt.slice(0, 4)}.
                            {el.createdAt.slice(5, 7)}.
                            {el.createdAt.slice(8, 10)}
                        </div>
                    </S.CommentWrapper>
                ))}
            </S.Wrapper>
        </>
    );
};

export default BoardCommentListPresenter;
