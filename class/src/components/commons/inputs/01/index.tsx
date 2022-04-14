// inputs
import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  color: red;
  font-size: 9px;
`;

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return (
    <>
      <Input type={props.type} {...props.register} />
    </>
  );
}
