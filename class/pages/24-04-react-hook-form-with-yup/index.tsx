// 터미널 - yarn add react-hook-form 설치
// 자세한 정보 : react-hook-form-com

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

const schema = yup
  .object({
    email: yup
      .string()
      .email("이메일 형식이 적합하지 않습니다!")
      .required("이메일은 필수 사항입니다!!"),
    password: yup
      .string()
      .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요!!!")
      .max(10, "비밀번호는 최대 10자리 이상 입력해 주세요.!!!!")
      .required("비밀번호는 필수 사항입니다."),
  })
  .required();

interface IFormValues {
  email?: string;
  password?: string;
}

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

const LoginButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  // 비제어 컴포넌트 방식이기 때문에 버튼을 누를때마다 아래의 console.log()가 찍히지 않음!
  // 장점 : 속도가 빠르다.
  console.log("리렌더링 체크@@@@@@");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일 : <input type="text" {...register("email")} />
      <Error>{formState.errors.email?.message}</Error>
      비밀번호 : <input type="text" {...register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      <LoginButton isActive={formState.isValid}>Login</LoginButton>
    </form>
  );
}
