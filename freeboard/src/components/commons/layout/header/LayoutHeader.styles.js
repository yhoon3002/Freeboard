import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 161px;
  padding-top: 60px;
  margin: 0 auto;
`;

export const WrapperChild = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
`;

export const HeaderRight = styled.div`
  margin-left: 0;
`;

export const LoginButton = styled.button`
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  background-color: dodgerblue;
  border-radius: 30%;
  border: none;
  font-weight: bold;
`;

export const SignupButton = styled.button`
  height: 30px;
  cursor: pointer;
  background-color: chartreuse;
  border-radius: 30%;
  border: none;
  font-weight: bold;
`;
