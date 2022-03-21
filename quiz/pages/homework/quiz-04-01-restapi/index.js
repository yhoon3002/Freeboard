import axios from "axios";
import { useState } from "react";

const QuizFirst = () => {
    const [data, setData] = useState("");

    async function callRestApi() {
        // await 꼭 설정해줘야해!!!!!
        // 1번. get 방식으로 요청하여 데이터 받기
        const result = await axios.get("https://koreanjson.com/users");

        // 2번. 전체 데이터 콘솔로 찍기
        console.log(result.data);

        // 전체 데이터의 0번째 값의 name 화면에 찍기
        // setData(result.data[0].name);
    }

    return (
        <div>
            <div>{data}</div>
            <button onClick={callRestApi}>REST-API 요청하기</button>
        </div>
    );
};

export default QuizFirst;
