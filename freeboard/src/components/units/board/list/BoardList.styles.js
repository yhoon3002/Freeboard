// This Is For Board List Styles Component

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

export const SearchTool = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const SearchImg = styled.img`
  position: absolute;
  margin-top: 7px;
  margin-left: 6px;
`;

export const SearchTitle = styled.input`
  width: 776px;
  padding-left: 30px;
  background: #f2f2f2;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
`;

export const SearchDate = styled.input`
  width: 240px;
  padding-left: 16px;
  margin-left: 40px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 95px;
  height: 30px;
  text-align: center;
  margin-left: 60px;
  color: #ffffff;
  background: #000000;
  border-radius: 10px;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const TH = styled.thead``;

export const TRH = styled.tr`
  border: none;
  border-top: 1px solid black;
`;

export const TR = styled.tr``;

export const Tbody = styled.tbody`
  border-bottom: 1px solid black;
`;

export const ThNumber = styled.th`
  width: 5%;
`;

export const ThTitle = styled.th`
  width: 70%;
  padding: 10px;
`;

export const ThWriter = styled.th`
  width: 15%;
  padding: 10px;
`;

export const ThDate = styled.th`
  width: 10%;
  padding: 10px;
`;

export const Td = styled.td`
  text-align: center;
  height: 24px;
  margin-top: 14px;
  margin-bottom: 14px;
  border-top: 1px solid #bdbdbd;
  border-collapse: collapse;
  padding: 10px;
`;

export const TdTitle = styled.td`
  text-align: center;
  height: 24px;
  margin-top: 14px;
  margin-bottom: 14px;
  border-top: 1px solid #bdbdbd;
  border-collapse: collapse;
  padding: 10px;
  cursor: pointer;

  :hover {
    color: blue;
    font-weight: bold;
  }
`;

export const BoardRegister = styled.button`
  width: 140px;
  border: none;
  margin-top: 30px;
  margin-left: 1060px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  background-color: white;
  cursor: pointer;
`;

export const PencilImg = styled.img`
  width: 12px;
  height: 12px;
  margin-bottom: 4px;
  margin-right: 5px;
`;
