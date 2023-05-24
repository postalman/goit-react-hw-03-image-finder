import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from 'components/ImageGallery/ImageGallery.styled'


const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </StyledImageGallery>
  );
};

export default ImageGallery;

