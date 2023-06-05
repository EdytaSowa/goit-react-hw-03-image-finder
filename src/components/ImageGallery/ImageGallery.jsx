import css from "./ImageGallery.module.css"

export const ImageGallery = ( {images} ) => { return (

<ul className={css.gallery}> 
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id}>
        <a href={largeImageURL}>
          <img className={css.ImageGalleryItemImage} src={webformatURL} alt="Zdjęcie" width="200px" />
        </a>
      </li>
    ))}

  </ul>

)

  
}

// import { Component } from 'react';
// import css from './ImageGallery.module.css';

// export class ImageGallery extends Component {
//   static defaultProps = {
//     images: [],
//   };

//   render() {
//     return (
//       <ul className={css.gallery}>
//         {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
//           <li key={id}>
//             <a href={largeImageURL}>
//               <img src={webformatURL} alt="Zdjęcie" width="200px" />
//             </a>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
