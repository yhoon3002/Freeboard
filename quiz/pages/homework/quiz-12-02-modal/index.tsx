import { Modal, Button } from "antd";
import { useState } from "react";

const QuizSecond = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClickModal = () => {
    setIsModalVisible(true);
  };

  const onClickOk = () => {
    setIsModalVisible(false);
  };

  const onClickCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={onClickModal}>
        모달열기
      </Button>
      <Modal
        title="게시글 등록"
        visible={isModalVisible}
        onOk={onClickOk}
        onCancel={onClickCancel}
      >
        <p>게시글이 등록되었습니다.</p>
      </Modal>
    </div>
  );
};
export default QuizSecond;
