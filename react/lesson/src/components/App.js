import React, { Component } from 'react';

const App = () =>  (
  <Counter></Counter>
)

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  hundlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }
  hundleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </React.Fragment>
    )
  }

}
export default App;
