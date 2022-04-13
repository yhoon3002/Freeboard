import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function HocLoginPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: id,
        password: password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("/example/hoc/main");
  };

  return (
    <>
      아이디 : <input type="text" onChange={onChangeId} />
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
