import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const QuizFirst = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleComplete = (data: any) => {
    setIsOpen((prev) => !prev);
  };

  return <div>{isOpen && <DaumPostcode onComplete={handleComplete} />}</div>;
};

export default QuizFirst;
