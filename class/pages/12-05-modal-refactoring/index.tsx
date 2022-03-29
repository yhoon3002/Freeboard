import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    console.log(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={onToggleModal}>모달 열기!!!!!!!!!</Button>

      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </div>
  );
};

export default ModalCustomPage;
