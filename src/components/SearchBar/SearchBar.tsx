import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
const notify = () => toast.error("You need to enter text to search for images");

export default function SearchBar({ onSubmit }) {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.value.value;
    if (!inputValue) {
      notify();
      return;
    }
    onSubmit(inputValue);
    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handlerSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="value"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
}
