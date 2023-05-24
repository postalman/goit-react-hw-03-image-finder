import React from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends React.Component {

  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: '',
  };

  componentDidMount() { 
    this.fetchImages();
   }

   componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery } = this.state;
    const apiKey = 'your_pixabay_api_key';
    const apiUrl = `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    axios
      .get(apiUrl)
      .then(response => {
        this.setState({ images: response.data.hits, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, isLoading: false });
      });
  };
  
   handleSearch = query => {
    
    this.setState({ searchQuery: query });
  };
  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div>
        
      
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        {error && <div>Error: {error}</div>}
        <ImageGallery images={images} />
      </div>
    );
};
}

export default App;