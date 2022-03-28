// This Is For Board List Styles Component

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchTool = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SearchButton = styled.button`
    width: 70px;
    height: 70px;

    &:hover {
        background-color: purple;
        color: red;
    }
`;

export const TR = styled.tr``;

export const ThNumber = styled.th`
    width: 400px;
`;

export const Th = styled.th``;

export const Td = styled.td`
    text-align: center;
    height: 24px;
    margin-top: 14px;
    margin-bottom: 14px;
`;
