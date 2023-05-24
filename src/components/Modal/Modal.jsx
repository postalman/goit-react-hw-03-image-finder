import React from 'react';

import { StyledOverlay, StyledModal } from 'components/Modal/Modal.styled';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, largeImageURL } = this.props;

    return (
      isOpen && (
        <StyledOverlay onClick={this.handleOverlayClick}>
          <StyledModal>
            <img src={largeImageURL} alt="" />
          </StyledModal>
        </StyledOverlay>
      )
    );
  }
}

export default Modal;
