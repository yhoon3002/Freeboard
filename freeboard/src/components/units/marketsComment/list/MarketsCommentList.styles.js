import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  margin-bottom: 15px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const WriterContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.div`
  margin-right: 10px;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const Contents = styled.div`
  width: 700px;
  margin-bottom: 20px;
`;

export const CreatedDate = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
`;

export const Pencil = styled.img`
  width: 18px;
  height: 18px;
  margin-left: auto;
  cursor: pointer;
`;

export const XImage = styled.img`
  float: right;
  width: 18px;
  height: 18px;
  margin-left: 30px;
  cursor: pointer;
`;
