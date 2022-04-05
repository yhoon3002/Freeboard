import { Component } from "react";

interface IState {
  count: number;
}

// 컴포넌트 기능을 가진 class
export default class CounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter() {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <div>Present Count : {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>Count Up</button>
      </div>
    );
  }
}
