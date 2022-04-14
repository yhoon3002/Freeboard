import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../../src/commons/inputs/01";
import Button01 from "../../../src/commons/buttons/01";

const schema = yup
  .object({
    writer: yup
      .string()
      .required("작성자는 필수 사항입니다!!")
      .max(5, "작성자는 5글자 이내입니다!!"),
    password: yup
      .string()
      .max(8, "비밀번호는 최대 8자리입니다!!")
      .matches(
        /^(?=.*[a-zA-z])(?=.*\d)(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])/,
        "영문, 숫자, 특수문자를 포함"
      )
      .required("비밀번호는 필수 사항입니다!!"),
    title: yup
      .string()
      .max(100, "제목은 100자 이내입니다!!")
      .required("제목은 필수 사항입니다!!"),
    contents: yup
      .string()
      .max(1000, "내용은 1000자 이내 문자열입니다!!")
      .required("내용은 필수사항입니다!!"),
  })
  .required();

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

export default function QuizFirst() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 작성자 : <input type="text" {...register("writer")}></input> */}
      작성자 : <Input01 type="text" register={register("writer")} />
      <br />
      <Error>{formState.errors.writer?.message}</Error>
      {/* 비밀번호 : <input type="text" {...register("password")}></input> */}
      비밀번호 : <Input01 type="text" register={register("password")} />
      <br />
      <Error>{formState.errors.password?.message}</Error>
      {/* 제목 : <input type="text" {...register("title")}></input> */}
      제목 : <Input01 type="text" register={register("title")} />
      <br />
      <Error>{formState.errors.title?.message}</Error>
      {/* 내용 : <input type="text" {...register("contents")}></input> */}
      내용 : <Input01 type="text" register={register("contents")} />
      <br />
      <Error>{formState.errors.contents?.message}</Error>
      <Button01 title="게시물 등록하기" />
    </form>
  );
}
