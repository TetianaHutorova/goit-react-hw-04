import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import fetchFotos from "../../imageService";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadmoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Image, Params, Photos } from "../../image";

export default function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);
  const [page, setPage] = useState<number>(1);
  const [loadMore, setloadMore] = useState<boolean>(false);
  const [galleryArr, setGalleryArr] = useState<Image[]>([]);
  const [modalParams, setModalParams] = useState<Params>({
    isOpen: false,
    url: "",
    alt: "",
  });

  function onSubmit(topic: string): void {
    setSearchValue(topic);
    setPage(1);
    setGalleryArr([]);
  }

  function handleLoadMoreClick(): void {
    setPage(page + 1);
  }

  function openModal(image: Image) {
    if (modalParams.isOpen) {
      return;
    }
    setModalParams({
      isOpen: true,
      url: image.urls.regular,
      alt: image.alt_description,
    });
  }

  function closeModal(): void {
    setModalParams({ isOpen: false, url: "", alt: "" });
  }

  useEffect(() => {
    if (searchValue === "") {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const { results, totalPages }: Photos = await fetchFotos(
          searchValue,
          page
        );
        if (results.length === 0) {
          setError("No images were found that match your query");
        }
        setGalleryArr((prevImages) => [...prevImages, ...results]);
        setloadMore(totalPages > 1 && page !== totalPages);
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
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {galleryArr.length > 0 && (
        <ImageGallery items={galleryArr} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {!isLoading && galleryArr.length > 0 && loadMore && (
        <LoadmoreBtn handleLoadMoreClick={handleLoadMoreClick} />
      )}
      {modalParams.isOpen && (
        <ImageModal modalParams={modalParams} onClose={closeModal} />
      )}
    </div>
  );
}
