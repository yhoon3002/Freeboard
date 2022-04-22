import BoardCreatePresenter from "./BoardCreate.presenter";
import { CREATE_BOARD } from "./BoardCreate.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";

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

  // 제목
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  function onChangeTitle(e) {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setTitleError("");
    }
  }

  // 내용
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

  // 주소
  const [address, setAddress] = useState("");

  // 우편번호 검색 눌렀을 때
  const [isClickedAddress, setIsClickedAddress] = useState(false);

  const onClickAddressSearchInput = () => {
    setIsClickedAddress(true);
  };

  // 모달 핸들러
  const handleOk = () => {
    setIsClickedAddress(false);
  };

  const handleCancel = () => {
    setIsClickedAddress(false);
  };

  // Daum Post Code 핸들러
  const [addressData, setAddressData] = useState("");

  const handleComplete = (data) => {
    setIsClickedAddress(false);
    setZipcode(data.zonecode);
    setAddress(data.address);
  };

  // 상세 주소
  const [addressDetail, setAddressDetail] = useState("");

  const onChangeAddressDetail = (e) => {
    setAddressDetail(e.target.value);
  };

  // 사진
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

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

      if (writer !== "" && password !== "" && title !== "" && contents !== "") {
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
              images: fileUrls,
            },
          },
        });
        // console.log(apiResult.data.createBoard._id);
        Modal.success({ content: "게시물 등록에 성공했습니다" });
        router.push(`/boards/${apiResult.data.createBoard._id}`);
      }
    } catch (error) {
      Modal.error({ content: error.message });
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
      onChangeAddressDetail={onChangeAddressDetail}
      onClickRegister={onClickRegister}
      onClickAddressSearchInput={onClickAddressSearchInput}
      isClickedAddress={isClickedAddress}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      addressData={addressData}
      zipcode={zipcode}
      address={address}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
};

export default BoardCreateContainer;
