import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import {getFetchData} from './api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {

  state = {
    query : '',
    images: [],
  }
  handleSubmit = () => {
    // e.preventDefault();
   
    this.getImages(this.state.query);
    // const images = getFetchData(this.state.query);

    // console.log( this.state.images);
    // console.log(this.state.query);
  };

  getImages = async (query) => {
    this.setState({ loading: true });
    try {
        const images = await getFetchData(query);
      
        this.setState({ images: images });
        // console.log(images);
    } catch (err) {
        this.setState({ error: err });
    } finally {
        this.setState({ loading: false });
    }
};


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images}/>
      </div>
    );
  }
}
