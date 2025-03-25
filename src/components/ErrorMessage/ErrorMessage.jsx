import css from "./Errormessage.module.css";
export default function ErrorMessage() {
  return <p className={css.error}>Something went wrong. Please reload the page.</p>;
}
