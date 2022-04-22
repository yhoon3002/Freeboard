import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  // _app.tsx로 보내줄 accessToken : Recoil 사용
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인하기
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });

    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저정보 받아오기

    // 3. 글로벌스테이트에 저장하기
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);

    // 4. 로그인 성공페이지로 이동하기
    alert("로그인에 성공하였습니다.");
    router.push("/quiz06/payment/loading");
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail}></input>
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword}></input>
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
