import React from 'react';
import Buttons from './buttons';
import Answer from './answer';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="grid-container">
        <Answer name="answer" previous="" operand="" current="0" />
        <Buttons name="zero" label="0" />
        <Buttons name="one" label="1" />
        <Buttons name="two" label="2" />
        <Buttons name="three" label="3" />
        <Buttons name="four" label="4" />
        <Buttons name="five" label="5" />
        <Buttons name="six" label="6" />
        <Buttons name="seven" label="7" />
        <Buttons name="eight" label="8" />
        <Buttons name="nine" label="9" />
        <Buttons name="multiply" label="x" />
        <Buttons name="divide" label={'\u00F7'} />
        <Buttons name="add" label="+" />
        <Buttons name="subtract" label="-" />
        <Buttons name="equal" label="=" />
        <Buttons name="decimal" label="." />
        <Buttons name="all-clear" label="AC" />
        <Buttons name="positive-negative" label="+/-" />
        <Buttons name="percent" label="%" />
      </div>
    );
  }
}

export default Calculator;
