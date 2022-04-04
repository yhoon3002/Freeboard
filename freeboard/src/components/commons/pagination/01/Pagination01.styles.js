// Pagination 01 Styles

import styled from "@emotion/styled";

export const Wrapper = styled.span`
    display: flex;
    justify-content: center;
`;

export const Arrow = styled.span`
    cursor: pointer;
`;

export const PageNumber = styled.span`
    margin-left: 7px;
    margin-right: 7px;
    color: ${(props) => (props.isActive ? "blue" : "black")};
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
    cursor: pointer;
`;
