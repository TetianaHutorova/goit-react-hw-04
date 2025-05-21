import css from "./ImageCard.module.css";
export default function ImageCard({ id, small, regular, user, changeImgValue, openModal }) {
  const handlerImgClick = (e) => changeImgValue(e.target.dataset.regular);

  return (
    <div
      onClick={(e) => {
        handlerImgClick(e); 
        openModal();
      }}
    >
      <img
        className={css.img}
        src={small}
        alt={`Photo by ${user}`}
        data-id={id}
        data-regular={regular}
      />
    </div>
  );
}
