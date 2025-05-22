import { FC, MouseEvent } from "react";
import css from "./ImageCard.module.css";
import { Image } from "../../image";

type ImageCardProps = {
  image: Image;
  changeImgValue: (value: string) => void;
  openModal: () => void;
};

const ImageCard: FC<ImageCardProps> = ({
  image,
  changeImgValue,
  openModal,
}) => {
  const { id, urls, user } = image;

  const handlerImgClick = (regular: string): void => {
    changeImgValue(regular);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    handlerImgClick(urls.regular);
    openModal();
  };

  return (
    <div onClick={handleClick}>
      <img
        className={css.img}
        src={urls.small}
        alt={`Photo by ${user.name}`}
        data-id={id}
        data-regular={urls.regular}
      />
    </div>
  );
};

export default ImageCard;
