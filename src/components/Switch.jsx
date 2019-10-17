import React from "react";
import './style.css';

class Switch extends React.Component {

  render() {
    return (
      <button
        className='Switch'
        role='switch'
        aria-checked={this.props.isOn}
        onClick={this.props.onClick}
      >
      <span className='u-visuallyhidden'>{this.props.isOn ? 'on' : 'off'}</span>
    </button>
    );
  }
}

export default Switch;
