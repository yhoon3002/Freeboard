import styled from "@emotion/styled";

export const Body = styled.body`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 540px;
    height: 960px;
    border: 1px solid #aacdff;
    box-shadow: 7px 7px 39px rgba(0, 104, 255, 0export const 25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`;

export const Error = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`;

export const H3 = styled.h3`
    font-size: 32px;
    color: #0068ff;
    font-weight: bold;
    width: 380px;
    margin-bottom: 40px;
`;

export const Inputbox = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #d2d2d2;
    padding: 18px;
    margin-top: 20px;

    ::placeholder {
        color: #797979;
        font-size: 16px;
    }
`;

export const Signup__button = styled.button`
    width: 380px;
    height: 75px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    font-size: 18px;
    margin-top: 60px;
`;
