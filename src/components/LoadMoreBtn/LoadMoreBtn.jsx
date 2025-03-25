import css from "./LoadMoreBtn.module.css";
export default function LoadmoreBtn({ handleLoadMoreClick }) {
  return <button className={css.btn} onClick={handleLoadMoreClick}>Load more images</ button>;
}
