// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

// 다이나믹 임포트 방법
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    console.log(value);

    // useForm의 setValue를 이용하여 contents라는 키의 이름으로 값을 강제로 저장한다.
    // (register로 등록해서 값을 넣어주는 것이 아님!!)
    // 콘솔로그로 아무것도 안쓴 상태의 값을 조회하면, <p><br></p>라고 나오므로 조건을 주어서 강제로 ""을 주도록 한다.
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange가 되었는지 안되었는지, react-hook-form에 알려주는 기능
    // (ReactQuill의 onChange는 우리가 아는 onChange가 아닌 이름만 같은 가짜 이기 때문에 trigger로 지정해줘야한다!!)
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두입력해 주세요!!");
      return;
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
        alert("등록성공!");
        console.log(result);
        router.push("/27-04-web-editor-detail/" + result.data.createBoard._id);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
