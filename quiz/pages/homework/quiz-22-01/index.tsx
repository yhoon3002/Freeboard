import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: id,
          password: password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      console.log(accessToken);
      alert("로그인에 성공하였습니다.");
      router.push("/homework/quiz-22-02-login-success");
    } catch (error) {
      alert("로그인을 먼저 해주세요 ㅠㅠㅠ");
    }
  };

  return (
    <>
      <div>
        아이디 : <input type="text" onChange={onChangeId}></input>
        <br />
        비밀번호 : <input type="password" onChange={onChangePassword}></input>
        <button onClick={onClickLogin}>로그인</button>
      </div>
    </>
  );
}
