// This Is For Board Comment Write Styles
// This Is For Board Comment List Styles

import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    margin-bottom: 20px;
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
    display: flex;
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const WriterInput = styled.input`
    width: 180px;
    height: 42px;
    margin-right: 24px;
    padding-left: 20px;
`;

export const PasswordInput = styled.input`
    width: 180px;
    height: 42px;
    padding-left: 20px;
`;

export const CommentInputWrapper = styled.div`
    border: 1px solid black;
`;

export const CommentInput = styled.textarea`
    width: 1196px;
    height: 108px;
    padding-left: 20px;
    padding-top: 20px;
    border: none;
    border-bottom: 1px solid #bdbdbd;
`;

export const CommentFooterWrapper = styled.div`
    display: flex;
    width: 1200px;
    height: 52px;
    border: none;
`;

export const MaxLength = styled.div`
    width: 80px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #bdbdbd;
    margin-left: 20px;
    margin-top: 14px;
`;

export const RegisterButton = styled.button`
    width: 130px;
    height: 100%;
    padding: 14px 16px;
    margin-left: 969px;
    background: #000000;
    color: #ffffff;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

export const Star = styled(Rate)`
    margin-top: 6px;
    margin-left: 20px;
`;
