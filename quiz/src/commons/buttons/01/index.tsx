// buttons
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: "yellow";
`;

export default function Button01(props) {
  return (
    <>
      <Button>{props.title}</Button>
    </>
  );
}
