import styled from "@emotion/styled";

export const WriterInput = styled.input`
    width: 100px;
    background-color: yellow;
    border: dotted green;
    border-radius: 5px;
    color: green;
    margin-left: 50px;
`;

export const TitleInput = styled.input`
    width: 150px;
    background-color: purple;
    color: whitesmoke;
    border-style: groove;
    border: 3px solid gray;
    margin-top: 10px;
    margin-left: 50px;
`;

export const ContentsInput = styled.textarea`
    background-color: goldenrod;
    border: none;
    width: 300px;
    height: 300px;
    margin-top: 10px;
    margin-left: 50px;
`;

export const ApplyButton = styled.button`
    background-color: ${(props) => (props.isActive ? "green" : "none")};
    width: 180px;
    height: 80px;
    font-weight: bolder;

    margin-left: 50px;
    margin-left: 80px;
    margin-top: 30px;
`;
