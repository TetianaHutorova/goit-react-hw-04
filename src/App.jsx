import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import ImageModal from "./components/ImageModal/ImageModal";

import { fetchFotos } from "./imageService";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadmoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [galleryArr, setGalleryArr] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [imageModal, setImageModal] = useState(null);

  const changeImgValue = (newValue) => {
    setImageModal(newValue);
  };

  const onSubmit = (value) => {
    setSearchValue(value);
    setPage(1);
    setGalleryArr([]);
  };

  const handleLoadMoreClick = () => setPage(page + 1);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (searchValue === "") {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchFotos(searchValue, page);
        setGalleryArr((prevGalleryArr) => {
          return [...prevGalleryArr, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchValue]);

  return (
    <div>
      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          closeModal={closeModal}
          imageModal={imageModal}
        />
      )}
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {galleryArr.length > 0 && (
        <ImageGallery
          changeImgValue={changeImgValue}
          items={galleryArr}
          openModal={openModal}
        />
      )}
      {isLoading && <Loader />}
      {!isLoading && galleryArr.length > 0 && (
        <LoadmoreBtn handleLoadMoreClick={handleLoadMoreClick} />
      )}
    </div>
  );
}
