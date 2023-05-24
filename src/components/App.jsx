import React from 'react';
import axios from 'axios';
import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { StyledApp } from 'components/App.styled';

class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    showModal: false,
    selectedImageURL: '',
    page: 1,
    query: '',
  };

  fetchImages = (query, page = 1) => {
    const API_KEY = '36044899-e18e2ff497f22a2f7cea9b850';
    const BASE_URL = 'https://pixabay.com/api/';
    const perPage = 12;

    this.setState({ isLoading: true });

    axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: page,
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSearchSubmit = query => {
    this.setState({ images: [], error: null, page: 1, query: query }, () => {
      this.fetchImages(query);
    });
  };

  handleLoadMore = () => {
    const { query, page } = this.state;

    this.fetchImages(query, page + 1);
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <StyledApp>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {error && <p className="error">{error}</p>}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {!isLoading && images.length > 0 && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
      </StyledApp>
    );
  }
}

export default App;
