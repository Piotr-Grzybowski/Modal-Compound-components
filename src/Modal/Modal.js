import React from 'react';
import './Modal.css';
import Header from './Subcomponents/Header';
import Content from './Subcomponents/Content';
import Footer from './Subcomponents/Footer';

class Modal extends React.Component {
  static Header = Header;
  static Content = Content;
  static Footer = Footer;
  state = {
    isOpen: true
  };

  toggle = (isItOn) => {
    if (isNaN(isItOn)) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    } else
      this.setState({
        isOpen: isItOn
      });
  };

  render() {
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { toggle: this.toggle })
    );
    return (
      <div
        className="modal"
        onClick={(event) => {
          this.toggle(false);
        }}
      >
        {children}
      </div>
    );
  }
}

export default Modal;
