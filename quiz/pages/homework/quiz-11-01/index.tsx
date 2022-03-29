// 별점 라이브러리

import { useState } from "react";
import { Rate } from "antd";

const QuizFirst = () => {
  const [value, setValue] = useState(0);

  const onChangeRate = (value: number) => {
    setValue(value);
    alert(value + "점");
  };

  return (
    <div>
      <Rate onChange={onChangeRate} value={value} />
      <div>{value}점</div>
    </div>
  );
};

export default QuizFirst;
