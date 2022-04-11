import * as S from "./LayoutHeader.styles";

const LayoutHeaderPresenter = (props) => {
    return (
        <S.Wrapper>
            <S.WrapperChild>
                <S.Logo onClick={props.onClickLogo}>0.Board</S.Logo>
                <S.HeaderRight>
                    <S.LoginButton onClick={props.onClickLogin}>
                        로그인
                    </S.LoginButton>
                    <S.SignupButton onClick={props.onClickSignup}>
                        회원가입
                    </S.SignupButton>
                </S.HeaderRight>
            </S.WrapperChild>
        </S.Wrapper>
    );
};

export default LayoutHeaderPresenter;
