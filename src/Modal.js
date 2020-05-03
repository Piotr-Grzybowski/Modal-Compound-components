import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  state = {
    isOpen: true
  };

  toggle = (isItOn) => {
    this.setState(() => ({
      isOpen: isItOn
    }));
  };

  render() {
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { isOpen, toogle: this.toggle })
    );
    return <div className="modal">{children}</div>;
  }
}

export default Modal;
