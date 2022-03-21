import {
    ContainerParent,
    ContainerChild,
    Head,
    Info,
    WriterContainer,
    PassWordContainer,
    PassWord,
    PassWordInput,
    Writer,
    WriterInput,
    TitleContainer,
    Title,
    TitleInput,
    ContextContainer,
    Context,
    ContextInput,
    AddressContainer,
    Address,
    AddressInput,
    AddressSearchContainer,
    AddressInputContainer,
    AddressSearchInput,
    AddressFirst,
    AddressDetail,
    YoutubeContainer,
    Youtube,
    YoutubeInput,
    PhotoContainer,
    Photo,
    PhotoInputContainer,
    PhotoInput1,
    PhotoInput2,
    PhotoInput3,
    SetContainer,
    Set,
    Radio,
    Radio1,
    Radio2,
    Label,
    RegisterContainer,
    Register,
    WriterError,
    PasswordError,
    TitleError,
    ContextError,
} from "../../../styles/new";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount

            boardAddress {
                zipcode
                address
                addressDetail
            }
            createdAt
        }
    }
`;

const FreeBoard = () => {
    // graphql
    const [callApi] = useMutation(CREATE_BOARD);
    // router
    const router = useRouter();

    // (State) 이름
    const [writer, setWriter] = useState("");
    const [writerError, setWriterError] = useState("");

    function onChangeWriter() {
        setWriter(event.target.value);
        if (event.target.value !== "") {
            setWriterError("");
        }
    }

    // (State) 비밀번호
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function onChangePassword() {
        setPassword(event.target.value);
        if (event.target.value !== "") {
            setPasswordError("");
        }
    }

    // (State) 제목
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    function onChangeTitle() {
        setTitle(event.target.value);
        if (event.target.value !== "") {
            setTitleError("");
        }
    }

    // (State) 내용
    const [contents, setContents] = useState("");
    const [contentsError, setContentsError] = useState("");

    function onChangeContents() {
        setContents(event.target.value);
        if (event.target.value !== "") {
            setContentsError("");
        }
    }

    // 유튜브 Url
    const [youtubeUrl, setYoutubeUrl] = useState("");

    const onChangeYoutubeUrl = () => {
        setYoutubeUrl(event.target.value);
    };

    // 우편번호
    const [zipcode, setZipcode] = useState("");

    const onChangeZipcode = () => {
        setZipcode(event.target.value);
    };

    // 주소
    const [address, setAddress] = useState("");

    const onChangeAddress = () => {
        setAddress(event.target.value);
    };

    // 상세 주소
    const [addressDetail, setAddressDetail] = useState("");

    const onChangeAddressDetail = () => {
        setAddressDetail(event.target.value);
    };

    // 사진

    // 등록 버튼 눌렀을 때
    const onClickRegister = async () => {
        try {
            if (writer === "") {
                setWriterError("이름을 입력해주세요!!");
            }

            if (password === "") {
                setPasswordError("비밀번호를 입력해주세요!!");
            }

            if (title == "") {
                setTitleError("제목을 입력해주세요!!");
            }

            if (contents == "") {
                setContentsError("내용을 입력해주세요!!");
            }

            if (
                writer !== "" &&
                password !== "" &&
                title !== "" &&
                contents !== ""
            ) {
                const apiResult = await callApi({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: title,
                            contents: contents,
                            youtubeUrl: youtubeUrl,
                            boardAddress: {
                                zipcode: zipcode,
                                address: address,
                                addressDetail: addressDetail,
                            },
                        },
                    },
                });
                console.log(apiResult.data.createBoard._id);
                alert("게시물이 정상 등록되었습니다.");
                alert("등록한 게시물 페이지로 이동합니다.");
                router.push(
                    `/boards/new_detail/${apiResult.data.createBoard._id}`
                );
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <ContainerParent>
            <ContainerChild>
                <Head>게시물 등록</Head>
                <Info>
                    <WriterContainer>
                        <Writer>작성자</Writer>
                        <WriterInput
                            type="text"
                            placeholder="이름을 적어주세요."
                            onChange={onChangeWriter}
                        ></WriterInput>
                        <WriterError>{writerError}</WriterError>
                    </WriterContainer>
                    <PassWordContainer>
                        <PassWord>비밀번호</PassWord>
                        <PassWordInput
                            type="text"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={onChangePassword}
                        ></PassWordInput>
                        <PasswordError>{passwordError}</PasswordError>
                    </PassWordContainer>
                </Info>
                <TitleContainer>
                    <Title>제목</Title>
                    <TitleInput
                        type="text"
                        placeholder="제목을 작성해주세요."
                        onChange={onChangeTitle}
                    ></TitleInput>
                    <TitleError>{titleError}</TitleError>
                </TitleContainer>
                <ContextContainer>
                    <Context>내용</Context>
                    <ContextInput
                        type="text"
                        placeholder="내용을 작성해주세요."
                        onChange={onChangeContents}
                    ></ContextInput>
                    <ContextError>{contentsError}</ContextError>
                </ContextContainer>
                <AddressContainer>
                    <Address>주소</Address>
                    <AddressInputContainer>
                        <AddressInput
                            type="text"
                            placeholder="07250"
                            onChange={onChangeZipcode}
                        ></AddressInput>
                        <AddressSearchInput
                            type="text"
                            placeholder="우편번호 검색"
                        ></AddressSearchInput>
                    </AddressInputContainer>
                    <AddressSearchContainer>
                        <AddressFirst
                            type="text"
                            onChange={onChangeAddress}
                        ></AddressFirst>
                        <AddressDetail
                            type="text"
                            onChange={onChangeAddressDetail}
                        ></AddressDetail>
                    </AddressSearchContainer>
                </AddressContainer>
                <YoutubeContainer>
                    <Youtube>유튜브</Youtube>
                    <YoutubeInput
                        type="text"
                        placeholder="링크를 복사해주세요."
                        onChange={onChangeYoutubeUrl}
                    ></YoutubeInput>
                </YoutubeContainer>
                <PhotoContainer>
                    <Photo>사진 첨부</Photo>
                    <PhotoInputContainer>
                        <PhotoInput1></PhotoInput1>
                        <PhotoInput2></PhotoInput2>
                        <PhotoInput3></PhotoInput3>
                    </PhotoInputContainer>
                </PhotoContainer>
                <SetContainer>
                    <Set>메인 설정</Set>
                    <Radio>
                        <Radio1 type="radio" name="setCheck" id="set" />
                        <Label htmlFor="set">유튜브</Label>
                        <Radio2 type="radio" name="setCheck" id="set2" />
                        <Label htmlFor="set2">사진</Label>
                    </Radio>
                </SetContainer>
                <RegisterContainer>
                    <Register type="button" onClick={onClickRegister}>
                        등록하기
                    </Register>
                </RegisterContainer>
            </ContainerChild>
        </ContainerParent>
    );
};

export default FreeBoard;
