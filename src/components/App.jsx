import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { getFetchData } from './api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    
  };

  onClick = () => {
    console.log('hejka');
  }

  onSubmit = async e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const query = e.target.elements.query.value;

    const images = await getFetchData(query);
    this.setState({ images: images });
    this.setState({ query: query });
    this.setState({ isLoading: false });
    console.log(images);

    // try {
    //   const images = await getFetchData(query);
    //   this.setState({ images: images });
    //   this.setState({ query: query });
    //   this.setState({isLoading: false})
    //   console.log(images);
    // } catch (err) {
    //   this.setState({ error: err });
    // } finally {
    //   this.setState({ loading: false });
    // }

    // this.getImages(this.state.query);

    // const images = getFetchData(this.state.query);

    // console.log( this.state.images);
  };

  // getImages = async query => {
  //   this.setState({ loading: true });
  //   try {
  //     const images = await getFetchData(query);

  //     this.setState({ images: images });
  //     this.setState({ query: value });
  //     console.log(images);
  //   } catch (err) {
  //     this.setState({ error: err });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.onClick}/>
      </div>
    );
  }
}
