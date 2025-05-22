import css from "./ErrorMessage.module.css";
import { FC } from "react";

const ErrorMessage: FC = () => {
  return (
    <p className={css.error}>Something went wrong. Please reload the page.</p>
  );
};

export default ErrorMessage;
