import * as S from "./BoardCreate.styles";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import Uploads01Container from "../../../commons/uploads/01/Uploads01.container";

const BoardCreatePresenter = (props) => {
    return (
        <S.ContainerParent>
            <S.ContainerChild>
                <S.Head>게시물 등록</S.Head>
                <S.Info>
                    <S.WriterContainer>
                        <S.Writer>작성자</S.Writer>
                        <S.WriterInput
                            type="text"
                            placeholder="이름을 적어주세요."
                            onChange={props.onChangeWriter}
                        ></S.WriterInput>
                        <S.WriterError>{props.writerError}</S.WriterError>
                    </S.WriterContainer>
                    <S.PassWordContainer>
                        <S.PassWord>비밀번호</S.PassWord>
                        <S.PassWordInput
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={props.onChangePassword}
                        ></S.PassWordInput>
                        <S.PasswordError>{props.passwordError}</S.PasswordError>
                    </S.PassWordContainer>
                </S.Info>
                <S.TitleContainer>
                    <S.Title>제목</S.Title>
                    <S.TitleInput
                        type="text"
                        placeholder="제목을 작성해주세요."
                        onChange={props.onChangeTitle}
                    ></S.TitleInput>
                    <S.TitleError>{props.titleError}</S.TitleError>
                </S.TitleContainer>
                <S.ContextContainer>
                    <S.Context>내용</S.Context>
                    <S.ContextInput
                        type="text"
                        placeholder="내용을 작성해주세요."
                        onChange={props.onChangeContents}
                    ></S.ContextInput>
                    <S.ContextError>{props.contentsError}</S.ContextError>
                </S.ContextContainer>
                <S.AddressContainer>
                    <S.Address>주소</S.Address>
                    <S.AddressInputContainer>
                        <S.AddressInput
                            type="text"
                            placeholder="07250"
                            readOnly
                            value={props.zipcode || ""}
                        ></S.AddressInput>
                        {props.isClickedAddress && (
                            <Modal
                                visible={true}
                                onOk={props.handleOk}
                                onCancel={props.handleCancel}
                            >
                                <DaumPostcode
                                    onComplete={props.handleComplete}
                                />
                            </Modal>
                        )}
                        <S.AddressSearchInput
                            onClick={props.onClickAddressSearchInput}
                        >
                            우편번호 검색
                        </S.AddressSearchInput>
                    </S.AddressInputContainer>
                    <S.AddressSearchContainer>
                        <S.AddressFirst
                            type="text"
                            readOnly
                            value={props.address || ""}
                        ></S.AddressFirst>
                        <S.AddressDetail
                            type="text"
                            onChange={props.onChangeAddressDetail}
                        ></S.AddressDetail>
                    </S.AddressSearchContainer>
                </S.AddressContainer>
                <S.YoutubeContainer>
                    <S.Youtube>유튜브</S.Youtube>
                    <S.YoutubeInput
                        type="text"
                        placeholder="링크를 복사해주세요."
                        onChange={props.onChangeYoutubeUrl}
                    ></S.YoutubeInput>
                </S.YoutubeContainer>
                <S.PhotoContainer>
                    <S.Photo>사진 첨부</S.Photo>
                    {props.fileUrls.map((el, index) => (
                        <Uploads01Container
                            key={uuidv4()}
                            index={index}
                            fileUrl={el}
                            onChangeFileUrls={props.onChangeFileUrls}
                        />
                    ))}
                </S.PhotoContainer>
                <S.SetContainer>
                    <S.Set>메인 설정</S.Set>
                    <S.Radio>
                        <S.Radio1 type="radio" name="setCheck" id="set" />
                        <S.Label htmlFor="set">유튜브</S.Label>
                        <S.Radio2 type="radio" name="setCheck" id="set2" />
                        <S.Label htmlFor="set2">사진</S.Label>
                    </S.Radio>
                </S.SetContainer>
                <S.RegisterContainer>
                    <S.Register type="button" onClick={props.onClickRegister}>
                        등록하기
                    </S.Register>
                </S.RegisterContainer>
            </S.ContainerChild>
        </S.ContainerParent>
    );
};

export default BoardCreatePresenter;
