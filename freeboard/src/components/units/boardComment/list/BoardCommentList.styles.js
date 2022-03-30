// This Is For Board Comment List Styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
`;

export const Line = styled.div`
    width: 1200px;
    border-top: 1px solid #bdbdbd;
    margin-top: 87px;
`;

export const Comments = styled.div`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-top: 40px;
`;

export const CommenterInfo = styled.div`
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const WriterInput = styled.input`
    width: 180px;
    height: 52px;
    margin-right: 24px;
    padding-left: 20px;
`;

export const PasswordInput = styled.input`
    width: 180px;
    height: 52px;
    padding-left: 20px;
`;

export const CommentInputWrapper = styled.div``;

export const CommentInput = styled.textarea`
    width: 1200px;
    height: 108px;
    padding-left: 20px;
    padding-top: 20px;
    border-bottom: 0px;
`;

export const CommentFooterWrapper = styled.div`
    width: 1200px;
    height: 52px;
    border: 1px solid black;
`;

export const MaxLength = styled.div``;

export const RegisterButton = styled.button``;
