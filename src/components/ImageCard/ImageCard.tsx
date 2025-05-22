import css from "./ImageCard.module.css";

import { Image } from "../../image";
import { FC } from "react";

type ImageCardProps = {
  image: Image;
  onClick: () => void;
};

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small} 
        alt={image.alt_description}
        onClick={() => onClick()}
        className={css.img}
      />
    </div>
  );
};

export default ImageCard;
