import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
    const [data, setData] = useState("");

    async function callRestApi() {
        const result = await axios.get("https://koreanjson.com/posts/1"); // posts/1 부분을 엔드포인트라 함
        console.log(result);
        console.log(result.data.title);
        setData(result.data.title);
    }

    return (
        <>
            <div>{data}</div>
            <button onClick={callRestApi}>REST-API 요청하기</button>
        </>
    );
}
