// This Is For Board Update Presenter Component

import * as S from "./BoardUpdate.styles";

const BoardUpdatePresenter = (props) => {
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
                            type="text"
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
                            onChange={props.onChangeZipcode}
                        ></S.AddressInput>
                        <S.AddressSearchInput
                            type="text"
                            placeholder="우편번호 검색"
                        ></S.AddressSearchInput>
                        <S.ZipcodeError>{props.zipcodeError}</S.ZipcodeError>
                    </S.AddressInputContainer>
                    <S.AddressSearchContainer>
                        <S.AddressFirst
                            type="text"
                            onChange={props.onChangeAddress}
                        ></S.AddressFirst>
                        <S.AddressFirstError>
                            {props.addressError}
                        </S.AddressFirstError>
                        <S.AddressDetail
                            type="text"
                            onChange={props.onChangeAddressDetail}
                        ></S.AddressDetail>
                        <S.AddressDetailError>
                            {props.addressDetailError}
                        </S.AddressDetailError>
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
                    <S.PhotoInputContainer>
                        <S.PhotoInput1></S.PhotoInput1>
                        <S.PhotoInput2></S.PhotoInput2>
                        <S.PhotoInput3></S.PhotoInput3>
                    </S.PhotoInputContainer>
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
                <S.CancelUpdateContainer>
                    <S.Cancel type="button">취소하기</S.Cancel>
                    <S.Update type="button" onClick={props.onClickUpdate}>
                        수정하기
                    </S.Update>
                </S.CancelUpdateContainer>
            </S.ContainerChild>
        </S.ContainerParent>
    );
};

export default BoardUpdatePresenter;
