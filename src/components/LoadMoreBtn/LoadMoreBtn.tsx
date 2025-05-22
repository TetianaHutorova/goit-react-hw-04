import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  handleLoadMoreClick: () => void;
};

const LoadmoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMoreClick }) => {
  return (
    <button className={css.btn} onClick={handleLoadMoreClick}>
      Load more images
    </button>
  );
};

export default LoadmoreBtn;
