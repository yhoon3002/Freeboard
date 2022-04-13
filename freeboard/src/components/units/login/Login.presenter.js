// This Is Login Presenter Component
import * as S from "./Login.styles";

const LoginPresenter = (props) => {
    return (
        <S.Wrapper>
            <S.Logo>0.Board</S.Logo>
            <S.InputWrapper>
                <S.InputEmail
                    type="text"
                    placeholder="이메일을 입력해주세요."
                    onChange={props.onChangeEmail}
                ></S.InputEmail>
                <S.InputPassword
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    onChange={props.onChangePassword}
                ></S.InputPassword>
            </S.InputWrapper>
            <S.CheckboxWrapper>
                <S.CheckBox type="checkbox" />
                <S.LoginStateText>로그인 상태 유지</S.LoginStateText>
            </S.CheckboxWrapper>
            <S.LoginButton onClick={props.onClickLogin}>
                로그인하기
            </S.LoginButton>
            <S.Line></S.Line>
            <S.HelpButton>
                <S.FindEmail>이메일 찾기</S.FindEmail>|
                <S.FindPassword>비밀번호 찾기</S.FindPassword>|
                <S.SignUp>회원가입</S.SignUp>
            </S.HelpButton>
        </S.Wrapper>
    );
};

export default LoginPresenter;
