import { useState } from "react";

const HashTagPage = () => {
  const [hastag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  const onKeyUpHash = (e) => {
    if (e.keyCode === 32 && e.target.value !== " ") {
      setHashArr([...hashArr, "#" + e.target.value]);
      e.target.value = "";
    }
  };
  return (
    <>
      <div>
        <span>
          {hashArr.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};

export default HashTagPage;
