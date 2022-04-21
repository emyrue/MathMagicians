import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import Answer from './answer';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    const {
      previous,
      operand,
      current,
    } = props;
    this.state = {
      total: previous,
      operation: operand,
      next: current,
    };
    this.update = this.update.bind(this);
  }

  update(buttonPress) {
    const object = calculate(this.state, buttonPress);
    this.setState(() => ({
      total: object.total,
      operation: object.operation,
      next: object.next,
    }));
  }

  render() {
    const {
      total,
      operation,
      next,
    } = this.state;
    return (
      <div className="grid-container">
        <Answer name="answer" previous={total} operand={operation} current={next} />
        <Buttons name="zero" label="0" buttonClick={(string) => this.update(string)} />
        <Buttons name="one" label="1" buttonClick={(string) => this.update(string)} />
        <Buttons name="two" label="2" buttonClick={(string) => this.update(string)} />
        <Buttons name="three" label="3" buttonClick={(string) => this.update(string)} />
        <Buttons name="four" label="4" buttonClick={(string) => this.update(string)} />
        <Buttons name="five" label="5" buttonClick={(string) => this.update(string)} />
        <Buttons name="six" label="6" buttonClick={(string) => this.update(string)} />
        <Buttons name="seven" label="7" buttonClick={(string) => this.update(string)} />
        <Buttons name="eight" label="8" buttonClick={(string) => this.update(string)} />
        <Buttons name="nine" label="9" buttonClick={(string) => this.update(string)} />
        <Buttons name="multiply" label="x" buttonClick={(string) => this.update(string)} />
        <Buttons name="divide" label="÷" buttonClick={(string) => this.update(string)} />
        <Buttons name="add" label="+" buttonClick={(string) => this.update(string)} />
        <Buttons name="subtract" label="-" buttonClick={(string) => this.update(string)} />
        <Buttons name="equal" label="=" buttonClick={(string) => this.update(string)} />
        <Buttons name="decimal" label="." buttonClick={(string) => this.update(string)} />
        <Buttons name="all-clear" label="AC" buttonClick={(string) => this.update(string)} />
        <Buttons name="positive-negative" label="+/-" buttonClick={(string) => this.update(string)} />
        <Buttons name="percent" label="%" buttonClick={(string) => this.update(string)} />
      </div>
    );
  }
}

export default Calculator;

Calculator.propTypes = {
  previous: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};
