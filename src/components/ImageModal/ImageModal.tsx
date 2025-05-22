import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../../image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  },
};

type ImageModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  imageModal: Image | null;
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  imageModal,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        {imageModal ? (
          <img className={css.img} src={imageModal} alt="Modal content" />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
