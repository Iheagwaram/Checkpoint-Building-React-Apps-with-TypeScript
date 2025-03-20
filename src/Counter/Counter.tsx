import React, { Component } from 'react';
import { CounterState } from './Counter.types'; // Import types from Counter.types.ts

class Counter extends Component<{}, CounterState> {
  state = {
    count: 0
  };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
