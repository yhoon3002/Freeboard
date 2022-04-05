import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

// 컴포넌트 기능을 가진 class
export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("Mounted !!");
    // 포커스 깜빡임
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    console.log("Updated & Rerendered !!");
  }

  componentWillUnmount() {
    console.log("Component Disappeared !!");
    // 채팅방 나가기
    // api 요청
  }

  onClickCounter() {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  }

  onClickExit() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>Present Count : {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>Count Up</button>
        <button onClick={this.onClickExit.bind(this)}>나가기</button>
      </div>
    );
  }
}
