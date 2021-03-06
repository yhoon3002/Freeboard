// 터미널 - yarn add react-hook-form 설치
// 자세한 정보 : react-hook-form-com
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  // 작성자, 제목, 내용의 onChange가 register에 들어가있음 : useState(writer ,setWrite)-이런식으로 안써줘도됨
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  // 비제어 컴포넌트 방식이기 때문에 버튼을 누를때마다 아래의 console.log()가 찍히지 않음!
  // 장점 : 속도가 빠르다.
  console.log("리렌더링 체크@@@@@@");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("Writer")} />
      제목 : <input type="text" {...register("Title")} />
      내용 : <input type="text" {...register("Contents")} />
      <button>등록하기</button>
    </form>
  );
}

// export default function NotUsingReactHookFormPage() {
//   const [writer, setWriter] = useState("");
//   const [title, setTitle] = useState("");
//   const [contents, setContents] = useState("");

//   const onChangeWriter = (e: any) => {
//     setWriter(e.target.value);
//   };

//   const onChangeTitle = (e: any) => {
//     setTitle(e.target.value);
//   };

//   const onChangeContents = (e: any) => {
//     setContents(e.target.value);
//   };

//   const onClickButton = () => {
//     console.log(writer);
//     console.log(title);
//     console.log(contents);
//   };

//   return (
//     <>
//       작성자 : <input type="text" onChange={onChangeWriter} />
//       제목 : <input type="text" onChange={onChangeTitle} />
//       내용 : <input type="text" onChange={onChangeContents} />
//       <button onClick={onClickButton}>등록하기</button>
//     </>
//   );
// }
