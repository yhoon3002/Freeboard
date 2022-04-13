// This Is Login Container Component
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import LoginPresenter from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import { withAuth } from "../../commons/hocs/withAuth";
import { accessTokenState } from "../../commons/store/index";

function LoginContainer() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser] = useMutation(LOGIN_USER);
    const [, setAccessToken] = useRecoilState(accessTokenState);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onClickLogin = async () => {
        const result = await loginUser({
            variables: {
                email: email,
                password: password,
            },
        });
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
        alert("로그인 성공");
        router.push("/boards");
    };

    return (
        <LoginPresenter
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickLogin={onClickLogin}
        />
    );
}

export default withAuth(LoginContainer);
