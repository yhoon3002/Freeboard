import styled from "@emotion/styled";
import { Calendar } from "antd";
import { useState } from "react";

const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

const QuizSecond = () => {
  function onPanelChange(value, mode) {}

  const [date, setDate] = useState("");
  const [monthDate, setMonthDate] = useState("");

  function onSelect(value) {
    setDate(value.format("YYYY-MM-DD"));
    setMonthDate(value.format("MM"));
  }

  return (
    <div>
      <MyCalendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
      />
      <div>{date}</div>
      <div>{monthDate}</div>
    </div>
  );
};

export default QuizSecond;
