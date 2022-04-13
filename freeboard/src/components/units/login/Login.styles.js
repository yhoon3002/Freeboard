// This is Login Styles Component
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1920px;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2px;
    margin: 0px auto;
    background: linear-gradient(0deg, yellow, lightGreen);
`;

export const Logo = styled.div`
    margin: 0px auto;
    margin-bottom: 80px;
    font-size: 70px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    margin-bottom: 10px;
`;

export const InputEmail = styled.input`
    width: 390px;
    height: 70px;
    border-radius: 16px;
    padding-left: 16px;
    margin-bottom: 20px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

export const InputPassword = styled.input`
    width: 390px;
    height: 70px;
    border-radius: 16px;
    padding-left: 16px;
    margin: 0px auto;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

export const CheckboxWrapper = styled.div`
    display: flex;

    margin-left: 770px;
    margin-bottom: 40px;
`;

export const CheckBox = styled.input`
    margin-top: 6px;
    margin-right: 8px;
`;

export const LoginStateText = styled.div`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

export const LoginButton = styled.button`
    width: 390px;
    height: 70px;
    margin: 0px auto;
    margin-bottom: 60px;
    border-radius: 16px;
`;

export const Line = styled.div`
    width: 390px;
    border: 1px solid black;
    margin: 0px auto;
    margin-bottom: 40px;
`;

export const HelpButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const FindEmail = styled.div`
    margin-right: 20px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
`;

export const FindPassword = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
`;

export const SignUp = styled.div`
    margin-left: 20px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
`;
