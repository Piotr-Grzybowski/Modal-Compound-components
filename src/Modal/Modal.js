import React from 'react';
import './Modal.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { isOpen, toogle: this.toggle })
    );
    return (
      <div className="modal" onClick={() => this.toggle(false)}>
        {children}
      </div>
    );
  }
}

export default Modal;
