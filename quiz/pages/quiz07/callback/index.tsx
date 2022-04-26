import axios from "axios";
import { useState } from "react";

export default function Quiz07Callback() {
  const [board, setBoard] = useState([]);
  const [board2, setBoard2] = useState([]);
  const [board3, setBoard3] = useState([]);

  const onClickCallback = () => {
    const first = new XMLHttpRequest();
    first.open("get", "http://numbersapi.com/random?min=1&max=200");
    first.send();
    first.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];

      console.log(num);

      const second = new XMLHttpRequest();

      second.open("get", `https://koreanjson.com/posts/${num}`);
      second.send();

      second.addEventListener("load", (res) => {
        const userId = JSON.parse(res.target.response).UserId;
        console.log(userId);

        const third = new XMLHttpRequest();

        third.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        third.send();

        third.addEventListener("load", (res) => {
          setBoard(JSON.parse(res.target.response));
          // console.log(board);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        const board2 = res.data;
        setBoard2(board2);
      });
  };

  const onClickAsyncAwait = async () => {
    const first = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const num = first.data.split(" ")[0];

    const second = await axios.get(`https://koreanjson.com/posts/${num}`);

    const userId = second.data.UserId;

    const third = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );

    setBoard3(third.data);
  };

  return (
    <div>
      <div>
        결과 : <button onClick={onClickCallback}>Callback</button>
        <div>
          {board.map((el) => (
            <div key={el.id}>
              <div>{el.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        결과 : <button onClick={onClickPromise}>Promise</button>
        <div>
          {board2.map((el) => (
            <div key={el.id}>
              <div>{el.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        결과 : <button onClick={onClickAsyncAwait}>Async/Await</button>
        <div>
          {board3.map((el) => (
            <div key={el.id}>
              <div>{el.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
