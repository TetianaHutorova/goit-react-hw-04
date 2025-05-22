import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Params } from "../../image";
import { FC } from "react";

interface ImageModalProps {
  modalParams: Params;
  onClose: () => void;
}
 
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

const ImageModal: FC<ImageModalProps> = ({modalParams, onClose}) => {
  return (
    <ReactModal
      style={customStyles}
      overlayClassName={css.backdrop}
      isOpen={modalParams.isOpen}
      shouldCloseOnEsc={true} 
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <img
        className={css.img}
        src={modalParams.url}
        alt={modalParams.alt}
        width="100%"
      />
    </ReactModal>
  );
};

export default ImageModal;
