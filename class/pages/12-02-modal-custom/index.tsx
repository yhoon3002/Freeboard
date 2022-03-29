import { Modal, Button, Space } from "antd";
import { useState } from "react";

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Space>
        <Button type="primary" onClick={showModal}>
          모달 열기!!!!!!!!!
        </Button>
        <Modal
          title="Basic Modal"
          visible={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          비밀번호 입력: <input type="password" onChange={onChangePassword} />
        </Modal>
      </Space>
    </div>
  );
};

export default ModalCustomPage;
