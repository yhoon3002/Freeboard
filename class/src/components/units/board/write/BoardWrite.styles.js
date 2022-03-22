import styled from "@emotion/styled";

export default styled.button`
    background-color: ${(props) => (props.isActive ? "yellow" : "none")};
`;
// export default는 무조건 1개
// export default를 쓰게 되면 import { Button } 식이 아닌 import Button 식으로 쓰면 됨

export const WriterInput = styled.input`
    border-color: green;
`;
