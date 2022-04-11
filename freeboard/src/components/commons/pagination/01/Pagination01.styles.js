// Pagination 01 Styles

import styled from "@emotion/styled";

export const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

export const Arrow = styled.span`
    cursor: pointer;
`;

export const PageNumber = styled.span`
    width: 25px;
    margin-left: 7px;
    margin-right: 7px;
    text-align: center;
    color: ${(props) => (props.isActive ? "white" : "blue")};
    background-color: ${(props) => (props.isActive ? "blue" : "white")};
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
    border: ${(props) => (props.isActive ? "1px solid gray" : "none")};
    cursor: pointer;
`;
