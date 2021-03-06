import { ChangeEvent, useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { Modal } from "antd";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setMyContents(e.target.value);
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);

    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      ????????? : <input type="text" onChange={onChangeWriter} />
      <br />
      ???????????? : <input type="text" onChange={onChangePassword} />
      <br />
      ?????? : <input type="text" onChange={onChangeTitle} />
      <br />
      ?????? : <input type="text" onChange={onChangeContents} />
      <br />
      <div>
        <div>????????? ????????? ????????????</div>
        <div
          style={{ width: "150px", height: "50px", backgroundColor: "gray" }}
          onClick={onClickImage}
        >
          ????????? ??????
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={callGraphqlApi}>GRAPHQL-API ????????????</button>
    </div>
  );
}
