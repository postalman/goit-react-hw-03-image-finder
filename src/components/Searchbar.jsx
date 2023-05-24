import React from 'react';

class SearchBar extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit();
      };

      handleInputChange = event => {
        this.props.onInputChange(event.target.value);
      };
      
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.props.searchQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
