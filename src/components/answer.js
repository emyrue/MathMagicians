import PropTypes from 'prop-types';
import React from 'react';

class Answer extends React.Component {
  constructor({
    name,
    current,
    previous,
    operand,
  }) {
    super({ name, current, previous });
    this.name = name;
    this.previous = previous;
    this.current = current;
    this.operand = operand;
    this.state = {};
  }

  render() {
    return (
      <div id={this.name}>
        <span className="previous">{this.previous}</span>
        <span className="operand">{this.operand}</span>
        <span className="current">{this.current}</span>
      </div>
    );
  }
}

export default Answer;

Answer.propTypes = {
  name: PropTypes.string.isRequired,
  previous: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
};
