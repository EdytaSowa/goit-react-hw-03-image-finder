import { Component } from 'react';


export class Searchbar extends Component {
  state = {
    query: '',
    error : null,
    isLoading: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e =>  {
    e.preventDefault();

};

  

  render() {
    return (
      <>
        <header className="searchbar">
          <form onSubmit={this.handleSubmit} className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              onChange={this.handleChange}
              name="query"
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

