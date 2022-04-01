import styled from "@emotion/styled";

export const Span = styled.span`
  color: ${(props) => (props.current === true ? "blue" : "red")};
  background-color: ${(props) => (props.current ? "white" : "gray")};
  cursor: pointer;
`;
