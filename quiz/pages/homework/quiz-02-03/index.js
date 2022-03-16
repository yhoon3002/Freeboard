import { useState } from "react";

export default function QuizThird() {
    // 3-1) let과 document.getElementById() 사용
    const authSubmit1 = () => {
        let authNum1 = String(Math.floor(Math.random() * 1000000)).padStart(
            6,
            "0"
        );

        let auth = document.getElementById("authNumChange1");
        auth.innerText = authNum1;
    };

    // 3-2) state 사용
    const [authNumChange2, setAuthNum] = useState("000000");

    function authSubmit2() {
        let authNum2 = String(Math.floor(Math.random() * 1000000)).padStart(
            6,
            "0"
        );
        setAuthNum(authNum2);
    }

    return (
        <div>
            {/* 3-1) let과 document.getElementById() 사용 */}
            <span id="authNumChange1">000000</span>
            <button onClick={authSubmit1}>(2-1번) 인증번호전송</button>

            <br />
            <br />

            {/* 3-2) state 사용 */}
            <span>{authNumChange2}</span>
            <button onClick={authSubmit2}>(2-2번) 인증번호전송</button>
        </div>
    );
}
