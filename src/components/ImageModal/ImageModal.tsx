import Modal from "react-modal";
import css from "./ImageModal.module.css"

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

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, closeModal, imageModal }) {
  console.log(imageModal);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <img className={css.img} src={imageModal}  />
      </div>
    </Modal>
  );
}
