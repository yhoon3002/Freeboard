// This Is For Board Update Container Component

import BoardUpdatePresenter from "./BoardUpdate.presenter";
import { UPDATE_BOARD } from "./BoardUpdate.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const BoardUpdateContainer = () => {
    const router = useRouter();
    console.log("router query : ");
    // console.log(router.query);
    // console.log("router : " + router);
    // console.log("boardId : " + router.query.boardId);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const [writer, setWriter] = useState("");
    const [writerError, setWriterError] = useState("");

    function onChangeWriter(e) {
        setWriter(e.target.value);
        if (e.target.value !== "") {
            setWriterError("");
        }
    }

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function onChangePassword(e) {
        setPassword(e.target.value);
        if (e.target.value !== "") {
            setPasswordError("");
        }
    }

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    function onChangeTitle(e) {
        setTitle(e.target.value);
        if (e.target.value !== "") {
            setTitleError("");
        }
    }

    const [contents, setContents] = useState("");
    const [contentsError, setContentsError] = useState("");

    function onChangeContents(e) {
        setContents(e.target.value);
        if (e.target.value !== "") {
            setContentsError("");
        }
    }

    const [youtubeUrl, setYoutubeUrl] = useState("");

    const onChangeYoutubeUrl = (e) => {
        setYoutubeUrl(e.target.value);
    };

    const [zipcode, setZipcode] = useState("");
    const [zipcodeError, setZipcodeError] = useState("");

    const onChangeZipcode = (e) => {
        setZipcode(e.target.value);
        if (e.target.value !== "") {
            setZipcodeError("");
        }
    };

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
        if (e.target.value !== "") {
            setAddressError("");
        }
    };

    const [addressDetail, setAddressDetail] = useState("");
    const [addressDetailError, setAddressDetailError] = useState("");

    const onChangeAddressDetail = (e) => {
        setAddressDetail(e.target.value);
        if (e.target.value !== "") {
            setAddressDetailError("");
        }
    };

    const onClickUpdate = async () => {
        try {
            if (writer === "") {
                setWriterError("????????? ??????????????????!!");
            }
            if (password === "") {
                setPasswordError("??????????????? ??????????????????!!");
            }
            if (title === "") {
                setTitleError("????????? ??????????????????!!");
            }
            if (contents === "") {
                setContentsError("????????? ??????????????????!!");
            }
            if (zipcode === "") {
                setZipcodeError("??????????????? ??????????????????!!");
            }
            if (address === "") {
                setAddressError("????????? ??????????????????!!");
            }
            if (addressDetail === "") {
                setAddressDetailError("??????????????? ??????????????????!!");
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
                const result = await updateBoard({
                    variables: {
                        updateBoardInput: {
                            title: title,
                            contents: contents,
                            youtubeUrl: youtubeUrl,
                            boardAddress: {
                                zipcode: zipcode,
                                address: address,
                                addressDetail: addressDetail,
                            },
                        },
                        password: password,
                        boardId: router.query.boardId,
                    },
                });

                alert("????????? ?????????????????????!");
                alert("????????? ????????? ???????????? ???????????????.");
                router.push(`/boards/${router.query.boardId}`);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <BoardUpdatePresenter
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
            onClickUpdate={onClickUpdate}
        />
    );
};

export default BoardUpdateContainer;
