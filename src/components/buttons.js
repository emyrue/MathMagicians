import PropTypes from 'prop-types';
import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    const { buttonClick, label } = this.props;
    buttonClick(label);
  }

  render() {
    const { name, label } = this.props;
    return (<button type="button" id={name} onClick={this.buttonClick}>{label}</button>);
  }
}

export default Buttons;

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};
