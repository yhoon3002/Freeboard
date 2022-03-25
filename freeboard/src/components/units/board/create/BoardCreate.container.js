import BoardCreatePresenter from "./BoardCreate.presenter";
import { CREATE_BOARD } from "./BoardCreate.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";

const BoardCreateContainer = (props) => {
    // graphql
    const [callApi] = useMutation(CREATE_BOARD);
    // router
    const router = useRouter();

    // (State) 이름
    const [writer, setWriter] = useState("");
    const [writerError, setWriterError] = useState("");

    function onChangeWriter(e) {
        setWriter(e.target.value);
        if (e.target.value !== "") {
            setWriterError("");
        }
    }

    // (State) 비밀번호
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function onChangePassword(e) {
        setPassword(e.target.value);
        if (e.target.value !== "") {
            setPasswordError("");
        }
    }

    // (State) 제목
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    function onChangeTitle(e) {
        setTitle(e.target.value);
        if (e.target.value !== "") {
            setTitleError("");
        }
    }

    // (State) 내용
    const [contents, setContents] = useState("");
    const [contentsError, setContentsError] = useState("");

    function onChangeContents(e) {
        setContents(e.target.value);
        if (e.target.value !== "") {
            setContentsError("");
        }
    }

    // 유튜브 Url
    const [youtubeUrl, setYoutubeUrl] = useState("");

    const onChangeYoutubeUrl = (e) => {
        setYoutubeUrl(e.target.value);
    };

    // 우편번호
    const [zipcode, setZipcode] = useState("");
    const [zipcodeError, setZipcodeError] = useState("");

    const onChangeZipcode = (e) => {
        setZipcode(e.target.value);
        if (e.target.value !== "") {
            setZipcodeError("");
        }
    };

    // 주소
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
        if (e.target.value !== "") {
        }
    };

    // 상세 주소
    const [addressDetail, setAddressDetail] = useState("");
    const [addressDetailError, setAddressDetailError] = useState("");

    const onChangeAddressDetail = (e) => {
        setAddressDetail(e.target.value);
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

            if (title === "") {
                setTitleError("제목을 입력해주세요!!");
            }

            if (contents === "") {
                setContentsError("내용을 입력해주세요!!");
            }

            if (zipcode === "") {
                setZipcodeError("우편번호를 입력해주세요!!");
            }

            if (address === "") {
                setAddressError("주소를 입력해주세요!!");
            }

            if (addressDetail === "") {
                setAddressDetailError("상세주소를 입력해주세요!!");
            }

            if (
                writer !== "" &&
                password !== "" &&
                title !== "" &&
                contents !== "" &&
                zipcode !== "" &&
                address !== "" &&
                addressDetail !== ""
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
                // console.log(apiResult.data.createBoard._id);
                alert("게시물이 정상 등록되었습니다.");
                alert("등록한 게시물 페이지로 이동합니다.");
                router.push(`/boards/${apiResult.data.createBoard._id}`);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <BoardCreatePresenter
            onChangeWriter={onChangeWriter}
            writerError={writerError}
            onChangePassword={onChangePassword}
            passwordError={passwordError}
            onChangeTitle={onChangeTitle}
            titleError={titleError}
            onChangeContents={onChangeContents}
            contentsError={contentsError}
            onChangeYoutubeUrl={onChangeYoutubeUrl}
            onChangeZipcode={onChangeZipcode}
            zipcodeError={zipcodeError}
            onChangeAddress={onChangeAddress}
            addressError={addressError}
            onChangeAddressDetail={onChangeAddressDetail}
            addressDetailError={addressDetailError}
            onClickRegister={onClickRegister}
        />
    );
};

export default BoardCreateContainer;
