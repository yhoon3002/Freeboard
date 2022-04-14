import { useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store/index";

// 로그인 요청 gql
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

// 유저정보 받기 gql
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
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

  const [, setUserInfo] = useRecoilState(userInfoState);

  // (2. 유저정보 받아오기)에서 사용할 부분
  const client = useApolloClient();

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
    const resultUserInfo = await client.query(
      // axios와 비슷(await)
      {
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }, // 헤더를 저장하는 공간, 옵션을 추가적으로 설정해주는 부분
      }
    );
    const userInfo = resultUserInfo.data.fetchUserLoggedIn; // userInfo는 email과 name이 들어가 있는 객체
    console.log(userInfo);

    // 3. 글로벌스테이트에 저장하기
    setAccessToken(accessToken); // 여기서 accessToken이 저장됨
    setUserInfo(userInfo); // 새로고침하면 userInfo가 날아감
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // userInfo는 객체인데 localStorage에는 객체가 못 들어감

    // 4. 로그인 성공페이지로 이동하기
    alert("로그인에 성공하였습니다.");
    router.push("/24-02-login-use-apollo-client-success");
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
