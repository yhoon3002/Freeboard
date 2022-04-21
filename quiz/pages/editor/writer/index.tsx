import "react-quill/dist/quill.snow.css";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
// react-quill을 적용할 때 발생하는 SSR 이슈를 dynamic import를 활용하여 해결하기 위해 import
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMutation, gql } from "@apollo/client";

// reqct-quill을 적용할 때 발생하는 SSR 이슈를 dynamic import를 활용하여 해결
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const Writer = styled.div`
  margin-left: 26px;
  margin-bottom: 10px;
`;

const Password = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  margin-left: 41px;
  margin-bottom: 10px;
`;

const Contents = styled.div`
  margin-left: 41px;
  margin-bottom: 10px;
`;

const RegisterButton = styled.button`
  width: 100px;
  margin: 0px auto;
  margin-top: 20px;
  color: white;
  background-color: blue;
  border: none;
`;

export default function EditorWriterPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  // trigger : ReactQuill을 변경시키면 ReactQuill이라는 trigger를 변경시키겠다. 라는 뜻
  const { register, setValue, trigger, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능임
    // <p><br><p>은 빈값일 때를 의미함
    setValue("contents", value === "<p><br><p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능임
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모든 항목을 작성해주세요 !");
    } else {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: data.writer,
              title: data.title,
              password: data.password,
              contents: data.contents,
            },
          },
        });
        alert("등록성공");
        router.push("/editor/detail/" + result.data.createBoard._id);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <Writer>
        작성자: <input type="text" {...register("writer")} />
      </Writer>
      <Password>
        비밀번호: <input type="text" {...register("password")} />
      </Password>
      <Title>
        제목: <input type="text" {...register("title")} />
      </Title>
      <Contents>
        내용: <ReactQuill onChange={onChangeContents} />
      </Contents>
      <RegisterButton>등록하기</RegisterButton>
    </form>
  );
}
