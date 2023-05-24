import { StyledImageGalleryItem, StyledImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled'
import React from 'react';
import Modal from 'components/Modal/Modal';
// const ImageGalleryItem = ({ image }) => {
//     return (
//       <StyledImageGalleryItem>
//         <StyledImageGalleryItemImage src={image.webformatURL} alt="" />
//       </StyledImageGalleryItem>
//     );
//   };
  
//   export default ImageGalleryItem;

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  handleImageClick = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <React.Fragment>
        <StyledImageGalleryItem onClick={this.handleImageClick}>
          <StyledImageGalleryItemImage src={image.webformatURL} alt="" />
        </StyledImageGalleryItem>
        {showModal && (
          <Modal isOpen={showModal} largeImageURL={image.largeImageURL} onClose={this.handleCloseModal} />
        )}
      </React.Fragment>
    );
  }
}

export default ImageGalleryItem;