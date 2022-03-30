import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const QuizThird = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addressData, setAddressData] = useState("");

  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onOk = () => {
    setIsOpen((prev) => !prev);
  };

  const onCancel = () => {
    setIsOpen((prev) => !prev);
  };

  const onComplete = (data: any) => {
    const fullAddress = data.address;
    setIsOpen((prev) => !prev);
    setAddressData(fullAddress);
  };

  return (
    <div>
      <Button onClick={onClickModal}>모달열기</Button>
      <span>{addressData}</span>
      {isOpen && (
        <Modal visible={true} onOk={onOk} onCancel={onCancel}>
          <DaumPostcode onComplete={onComplete}></DaumPostcode>
        </Modal>
      )}
    </div>
  );
};

export default QuizThird;
