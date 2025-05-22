import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"
import { Image } from "../../image";

interface ImageGalleryProps {
  items: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard image={item} onClick={() => openModal(item)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;