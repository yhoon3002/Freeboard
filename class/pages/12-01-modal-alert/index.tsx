import { Modal, Button, Space } from "antd";

const ModalAlertPage = () => {
  const onClickSuccess = () => {
    Modal.success({
      content: "성공",
    });
  };

  const onClickFail = () => {
    Modal.error({
      title: "실패메시지",
      content: "실패",
    });
  };

  return (
    <div>
      <Space>
        <Button onClick={onClickSuccess}>성공했을때!!</Button>
        <Button onClick={onClickFail}>실패했을때!!</Button>
      </Space>
    </div>
  );
};

export default ModalAlertPage;
