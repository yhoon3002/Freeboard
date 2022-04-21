// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// ssr (ServerSideRendering) : "서버사이드에서는 rendering 하지 않겠다" 라는 뜻
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  // event가 들어가는게 아님.
  // 라이브러리이기 때문에 event가 들어가는게 아니고 value가 들어감
  const onChangeContents = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
