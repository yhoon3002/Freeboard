import { useState } from "react";
import { Body, Wrapper, Error, H3, Inputbox, Signup__button } from "./indexcss";

export default function QuizFourth() {
    const [email, setEmail] = useState("");

    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");

    const [passwordCheck, setPasswordCheck] = useState("");

    const [passwordError, setPasswordError] = useState("");

    //이메일 확인
    function onChangeEmail() {
        setEmail(event.target.value);
    }

    function onClickSignup() {
        if (email.includes("@") === false) {
            setEmailError("이메일이 올바르지 않습니다.");
        } else {
            setEmailError("");
        }

        if (password === passwordCheck) {
            setPasswordError("");
        } else {
            setPasswordError("위에 입력하신 비밀번호와 일치하지않습니다!");
        }
    }

    //비밀번호 확인
    function onChangePassword() {
        setPassword(event.target.value);
    }

    function onChangePasswordCheck() {
        setPasswordCheck(event.target.value);
    }

    return (
        <Body>
            <Wrapper>
                <H3>코드캠프 회원가입</H3>

                <Inputbox
                    type="text"
                    placeholder="이메일을 입력"
                    onChange={onChangeEmail}
                ></Inputbox>
                <Error>{emailError}</Error>

                <Inputbox
                    type="password"
                    placeholder="비밀번호를 입력해 주세요."
                    onChange={onChangePassword}
                />

                <Inputbox
                    type="password"
                    placeholder="비밀번호를 다시 입력해 주세요."
                    onChange={onChangePasswordCheck}
                />
                <Error>{passwordError}</Error>

                <Signup__button onClick={onClickSignup}>
                    가입하기
                </Signup__button>
            </Wrapper>
        </Body>
    );
}
