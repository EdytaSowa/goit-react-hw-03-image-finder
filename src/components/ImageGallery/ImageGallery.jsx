import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.gallery}>
    {images.map((image, index) => (
      <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
    ))}
  </ul>
);

