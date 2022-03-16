import { useState } from "react";

export default function QuizSecond() {
    // 2-1) let과 document.getElementById() 사용
    const countup1 = () => {
        let result1 = Number(document.getElementById("count1").innerText) + 1;
        document.getElementById("count1").innerText = result1;
    };

    // 2-2) state를 사용
    const [count2, setCount] = useState(0);

    function countup2() {
        setCount(count2 + 1);
    }

    return (
        <div>
            {/* 2-1) let과 document.getElementById() 사용  */}
            <div id="count1">0</div>
            <button onClick={countup1}>(2-1번) 카운트증가</button>

            <br />
            <br />

            {/* 2-2) state를 사용 */}
            <div>{count2}</div>
            <button onClick={countup2}>(2-2번) 카운트증가</button>
        </div>
    );
}
