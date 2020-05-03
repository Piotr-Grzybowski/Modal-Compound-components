import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  state = {
    isOpen: true
  };

  toggle = (active) => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) => {
      React.cloneElement(child, { isOpen, toogle: this.toggle });
    });
    return <div>{children}</div>;
  }
}

export default Modal;
