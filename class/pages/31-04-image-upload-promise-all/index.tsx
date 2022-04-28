import { ChangeEvent, useState } from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다 !!");
        return;
      }

      // ↓ 임시 URL 형태로 만들어준다, DB에 저장가능하지만,
      // ↓ size가 image size만큼 되기 때문에 엄청 크다.
      // ↓ 임시 미리보기 주소임
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); // 2진 형태의 큰 데이터
      fileReader.onload = (data) => {
        // ↑ load가 되면서 실행이 됨
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;

          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSumbit = async () => {
    // uploadFile을 통해 url을 얻어내고
    // 그 얻은 url을 통해 createBoard를 할 것임

    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resulturls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    // files.map((el) => {
    //   return el && uploadFile({ variables: { file: el } });
    //   return el ? uploadFile({ variables: { file: el } }) : undefined;
    //   if (el) {
    //     return uploadFile({ variables: { file: el } });
    //   } else {
    //     return undefined;
    //   }
    // });

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지 업로드 입니다 !!",
          images: resulturls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      {/* ↓ 스토리지에 저장되있는 것이 아니기 때문에 스토리지 찌꺼끼가 남지 않는다. */}
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      {/* 게시글 등록하기를 누르게 되면 createBoard와 uploadFile이 동시에 실행된다. */}
      <button onClick={onClickSumbit}>게시글 등록하기</button>
    </div>
  );
}
