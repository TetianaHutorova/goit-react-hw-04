import css from "./ImageCard.module.css";
export default function ImageCard({ id, small, regular, user }) {
  return (
    <div>
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
