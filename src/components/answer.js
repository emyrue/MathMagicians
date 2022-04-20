import PropTypes from 'prop-types';
import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      previous,
      current,
      operand,
    } = this.props;
    return (
      <div id={name}>
        <span className="previous">{previous}</span>
        {' '}
        <span className="operand">{operand}</span>
        {' '}
        <span className="current">{current}</span>
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
