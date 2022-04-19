import PropTypes from 'prop-types';
import React from 'react';

class Buttons extends React.Component {
  constructor({ name, label }) {
    super({ name, label });
    this.name = name;
    this.label = label;
  }

  render() {
    return (<button type="button" id={this.name}>{this.label}</button>);
  }
}

export default Buttons;

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
