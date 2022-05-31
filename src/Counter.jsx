import React from 'react';

import './counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.start,
      startCounter: props.start,
      step: props.step,
    };
  }

  decrement() {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + this.state.step,
    });
  };

  reset() {
    this.setState({
      counter: this.state.startCounter,
    });
  };

  render() {
    return (
      <div className="counter">
        <button 
          data-action="decrease" 
          className="counter__button"
          onClick={this.decrement.bind(this)}
        >
          -
        </button>
        <span 
          className="counter__value"
          onClick={() => this.reset()}
        >
          {this.state.counter}
        </span>
        <button 
          data-action="increase" 
          className="counter__button"
          onClick={this.increment}
        >
          +
        </button>
    </div>
    )
  }
};

export default Counter;

