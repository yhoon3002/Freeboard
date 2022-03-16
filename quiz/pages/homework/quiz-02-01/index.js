import { useState } from "react";

export default function QuizFirst() {
    // 1-1) let과 document.ElementById() 사용
    const change1 = () => {
        let hello1 = document.getElementById("changeText1");
        hello1.innerText = "(1-1번)반갑습니다";
    };

    // 1-2) state를 사용
    const [changeText2, setChangeText2] = useState("(1-2번)안녕하세요");

    function change2() {
        setChangeText2("(1-2번)반갑습니다");
    }
    return (
        <div>
            {/* 1-1) let과 document.ElementById() 사용*/}
            <button onClick={change1}>
                <span id="changeText1">(1-1번)안녕하세요</span>
            </button>

            <br />
            <br />

            {/* 1-2) state를 사용 */}
            <button onClick={change2}>
                <span>{changeText2}</span>
            </button>
        </div>
    );
}
