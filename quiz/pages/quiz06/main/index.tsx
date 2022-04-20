import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store/index";
import styled from "@emotion/styled";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const Wrapper = styled.div`
  margin: 0px auto;
`;

const InputID = styled.input`
  margin-left: 10px;
  margin-right: 25px;
`;

const InputPassword = styled.input`
  margin-left: 10px;
  margin-right: 25px;
`;

const LoginButton = styled.button`
  width: 80px;
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
    const result = await loginUser({
      variables: {
        email: id,
        password: password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);

    if (localStorage.getItem("baskets")) {
      if (
        window.confirm(
          "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?"
        )
      ) {
        router.push("/quiz06/basket");
      }
    }
  };

  return (
    <>
      <Wrapper>
        아이디 : <InputID type="text" onChange={onChangeId}></InputID>
        비밀번호 :
        <InputPassword
          type="password"
          onChange={onChangePassword}
        ></InputPassword>
        <LoginButton onClick={onClickLogin}>로그인</LoginButton>
      </Wrapper>
    </>
  );
}
