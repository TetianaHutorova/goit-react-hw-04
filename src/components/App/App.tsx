import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import ImageModal from "../ImageModal/ImageModal";

import fetchFotos from "../../imageService";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadmoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Params, Image, Photos } from "../../image";

export default function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [galleryArr, setGalleryArr] = useState<Image[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageModal, setImageModal] = useState<Image | null>(null);

  const changeImgValue = (newValue: Image | null): void => {
    setImageModal(newValue);
  };

  function onSubmit(topic: string): void {
    setSearchValue(topic);
    setPage(1);
    setGalleryArr([]);
  }

  const handleLoadMoreClick = () => setPage(page + 1);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(): void {
    setIsOpen(false);
  }

  useEffect(() => {
    if (searchValue === "") {
      return;
    }

    async function getData(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);

        const { results }: Photos = await fetchFotos(searchValue, page);

        setGalleryArr((prevGalleryArr) => {
          return [...prevGalleryArr, ...results];
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
