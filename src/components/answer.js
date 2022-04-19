import PropTypes from 'prop-types';
import React from 'react';

class Answer extends React.Component {
  constructor({ name, label }) {
    super({ name, label });
    this.name = name;
    this.label = label;
  }

  render() {
    return (<div id={this.name}>{this.label}</div>);
  }
}

export default Answer;

Answer.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
