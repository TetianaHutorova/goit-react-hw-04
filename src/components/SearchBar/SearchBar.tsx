import React, { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => toast.error("You need to enter text to search for images");

type SearchBarProps = {
  onSubmit: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements.namedItem(
      "value"
    ) as HTMLInputElement;
    const inputValue = inputElement.value.trim();

    if (!inputValue) {
      notify();
      return;
    }

    onSubmit(inputValue);
    e.currentTarget.reset();
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
};

export default SearchBar;
