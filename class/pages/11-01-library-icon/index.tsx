import { QqOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(QqOutlined)`
  font-size: 50px;
  color: red;
`;

const LibraryIconPage = () => {
  return (
    <div>
      <MyIcon />
      {/* 아이콘에 id="" 를 못쓴다. antd에서 icon을 새롭게 만들어주기 때문! */}
    </div>
  );
};

export default LibraryIconPage;
