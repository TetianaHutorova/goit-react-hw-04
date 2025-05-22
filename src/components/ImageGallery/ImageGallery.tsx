import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../image";

type ImageGalleryProps = {
  items: Image[];
  changeImgValue: (value: string) => void;
  openModal: () => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  changeImgValue,
  openModal,
}) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            image={item}
            changeImgValue={changeImgValue}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
