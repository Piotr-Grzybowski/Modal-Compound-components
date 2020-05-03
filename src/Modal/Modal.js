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
    console.log();
  };

  render() {
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { toggle: this.toggle })
    );
    const showHideClassName = isOpen
      ? 'modal display-block'
      : 'modal display-none';
    return (
      <div
        className={showHideClassName}
        onClick={(event) => {
          this.toggle(false);
        }}
      >
        <section className="modal-main" onClick={(e) => e.stopPropagation()}>
          {children}
        </section>
      </div>
    );
  }
}

export default Modal;
