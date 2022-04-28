// This Is Login Container Component
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import LoginPresenter from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store/index";

const LoginContainer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("dddd");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      console.log(result);
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      console.log(accessToken);
      router.push("/markets");
    } catch (error) {
      alert("error.message");
    }
  };

  return (
    <LoginPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
};

export default LoginContainer;
