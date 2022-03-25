// This Is For Board Update Styles Component

import styled from "@emotion/styled";

export const ContainerParent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerChild = styled.div`
    border: solid 1px black;
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Head = styled.h1`
    display: inline-block;
    width: 174px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 53px;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 80px;
`;

export const Info = styled.div`
    padding-bottom: 40px;
    display: flex;
`;

export const WriterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WriterError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`;

export const PasswordError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`;

export const TitleError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`;

export const ContextError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`;

export const Writer = styled.div`
    width: 50px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    padding-bottom: 16px;
`;

export const WriterInput = styled.input`
    width: 400px;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-left: 16px;
`;

export const PassWordContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 24px;
`;

export const PassWord = styled.div`
    width: 70px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    padding-bottom: 16px;
`;

export const PassWordInput = styled.input`
    width: 400px;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
    padding-left: 16px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`;

export const Title = styled.div`
    width: 40px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    padding-bottom: 16px;
`;

export const TitleInput = styled.input`
    width: 824px;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-left: 16px;
    background-color: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
`;

export const ContextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`;

export const Context = styled.div`
    width: 40px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    padding-bottom: 16px;
`;

export const ContextInput = styled.textarea`
    width: 824px;
    height: 480px;
    padding-left: 16px;
    padding-bottom: 442px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 37px;
`;

export const Address = styled.div`
    width: 40px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    padding-bottom: 16px;
`;

export const AddressInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 16px;
`;

export const AddressInput = styled.input`
    width: 77px;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
    padding-left: 16px;
    margin-right: 16px;
`;

export const ZipcodeError = styled.div`
    height: 11px;
    margin-top: 20px;
    margin-left: 10px;
    color: red;
    font-size: 11px;
`;

export const AddressSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AddressSearchInput = styled.input`
    width: 124px;
    height: 52px;
    background: #000000;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    ::placeholder {
        font-family: "Noto Sans CJK KR";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
    }
    padding: 14px 10px;
`;

export const AddressFirst = styled.input`
    width: 824px;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
`;

export const AddressFirstError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const AddressDetail = styled.input`
    width: 824px;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
`;

export const AddressDetailError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
    margin-top: 5px;
    margin-bottom: 26px;
`;

export const YoutubeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`;

export const Youtube = styled.div`
    width: 50px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    padding-bottom: 14px;
`;

export const YoutubeInput = styled.input`
    width: 824px;
    height: 45.78px;
    padding-left: 16px;
    padding-top: 12px;
    ::placeholder {
        font-family: "Noto Sans CJK KR";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #bdbdbd;
    }
`;

export const PhotoContainer = styled.div`
    width: 824px;
    padding-bottom: 40px;
`;

export const Photo = styled.div`
    width: 70px;
    height: 24px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    margin-bottom: 16px;
`;

export const PhotoInputContainer = styled.div`
    display: flex;
`;

export const PhotoInput1 = styled.div`
    width: 78px;
    height: 78px;
    background: #bdbdbd;
    margin-right: 24px;
`;

export const PhotoInput2 = styled.div`
    width: 78px;
    height: 78px;
    background: #bdbdbd;
    margin-right: 24px;
`;

export const PhotoInput3 = styled.div`
    width: 78px;
    height: 78px;
    background: #bdbdbd;
`;

export const SetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 824px;
`;

export const Set = styled.div`
    width: 70px;
    height: 24px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    margin-bottom: 16px;
`;

export const Radio = styled.div`
    text-align: left;
    padding-bottom: 80px;
`;

export const Radio1 = styled.input``;

export const Label = styled.label`
    padding-right: 22px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

export const Radio2 = styled.input`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
`;

export const CancelUpdateContainer = styled.div`
    text-align: center;
    padding-bottom: 100px;
`;

export const Cancel = styled.button`
    width: 179px;
    height: 52px;
    background: #bdbdbd;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-right: 30px;
`;

export const Update = styled.button`
    width: 179px;
    height: 52px;
    background: #ffd600;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`;
