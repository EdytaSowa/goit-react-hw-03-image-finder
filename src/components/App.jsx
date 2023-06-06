import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { getFetchData } from './api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import { Bars } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    page: 1,
    isPaginationShow: false,
    urlImageModal: '',
    isModalShow: false,
    error: '',
  };

  onClick = async () => {
    const images = this.state.images;
    console.log(this.state.page);

    const imagesAfterPagination = await getFetchData(
      this.state.query,
      this.state.page + 1
    );

    this.setState(prevState => ({ page: prevState.page + 1 }));

    this.setState({ images: [...images, ...imagesAfterPagination] });
    // console.log(imagesAfterPagination);
  };

  onModalClose = () => {
    this.setState({ isModalShow: false });
  };

  onImageClick = e => {
    this.setState({ isModalShow: true });
    const url = e.target.name;
    this.setState({ urlImageModal: url });
  };

  onSubmit = async e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const query = e.target.elements.query.value;

    // const images = await getFetchData(query, this.state.page);

    try {
      const images = await getFetchData(query, this.state.page);
      this.setState({ images: images });
      this.setState({ query: query });
      this.setState({ isLoading: false });
      this.setState({ isPaginationShow: true });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isLoading: false });
    }

    /* this.setState({ error: err });
    
    */

    // try {
    //   const images = await getFetchData(query);
    //   this.setState({ images: images });
    //   this.setState({ query: query });
    //   this.setState({isLoading: false})
    //   console.log(images);
    // } catch (err) {
    //
    // } finally {
    //   this.setState({ loading: false });
    // }

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

        {this.state.isLoading ? (
          <Bars
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : null}

        <ImageGallery
          images={this.state.images}
          onImageClick={this.onImageClick}
        />

        {!this.state.isModalShow ? null : (
          <Modal
            url={this.state.urlImageModal}
            closeModal={this.onModalClose}
          />
        )}

        {this.state.images.length === 0 ? null : (
          <Button onClick={this.onClick} />
        )}
        {/* {this.state.isPaginationShow ? <Button onClick={this.onClick} /> : null} */}
      </div>
    );
  }
}
