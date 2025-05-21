import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ items, changeImgValue, openModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            id={item.id}
            small={item.urls.small}
            regular={item.urls.regular}
            user={item.user}
            changeImgValue={changeImgValue}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
}
