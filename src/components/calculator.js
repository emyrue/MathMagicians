import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import Answer from './answer';
import calculate from '../logic/calculate';

const Calculator = (props) => {
  const {
    previous,
    operand,
    current,
  } = props;
  const [total, setTotal] = React.useState(previous);
  const [operation, setOperation] = React.useState(operand);
  const [next, setNext] = React.useState(current);

  const update = (buttonPress) => {
    const object = calculate({
      total,
      operation,
      next,
    }, buttonPress);
    setTotal(object.total);
    setOperation(object.operation);
    setNext(object.next);
  };

  return (
    <div className="grid-container">
      <Answer name="answer" previous={total} operand={operation} current={next} />
      <Buttons name="zero" label="0" buttonClick={(string) => update(string)} />
      <Buttons name="one" label="1" buttonClick={(string) => update(string)} />
      <Buttons name="two" label="2" buttonClick={(string) => update(string)} />
      <Buttons name="three" label="3" buttonClick={(string) => update(string)} />
      <Buttons name="four" label="4" buttonClick={(string) => update(string)} />
      <Buttons name="five" label="5" buttonClick={(string) => update(string)} />
      <Buttons name="six" label="6" buttonClick={(string) => update(string)} />
      <Buttons name="seven" label="7" buttonClick={(string) => update(string)} />
      <Buttons name="eight" label="8" buttonClick={(string) => update(string)} />
      <Buttons name="nine" label="9" buttonClick={(string) => update(string)} />
      <Buttons name="multiply" label="x" buttonClick={(string) => update(string)} />
      <Buttons name="divide" label="÷" buttonClick={(string) => update(string)} />
      <Buttons name="add" label="+" buttonClick={(string) => update(string)} />
      <Buttons name="subtract" label="-" buttonClick={(string) => update(string)} />
      <Buttons name="equal" label="=" buttonClick={(string) => update(string)} />
      <Buttons name="decimal" label="." buttonClick={(string) => update(string)} />
      <Buttons name="all-clear" label="AC" buttonClick={(string) => update(string)} />
      <Buttons name="positive-negative" label="+/-" buttonClick={(string) => update(string)} />
      <Buttons name="percent" label="%" buttonClick={(string) => update(string)} />
    </div>
  );
};

Calculator.propTypes = {
  previous: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default Calculator;
