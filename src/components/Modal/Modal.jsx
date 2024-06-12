import "./Modal.css";

const Modal = ({isModalVisible, closeModal}) => {
  return (
    <div className="modal-container" onClick={() => {closeModal()}} style={{ display: `${isModalVisible && "none"}`}}>
      <div className="modal-content" onClick={(event) => {event.stopPropagation()}}>
        <p>Modal Image</p>
        <h1>Movie title</h1>
        <h2>Movies Description</h2>
        Runtime in minutes Backdrop poster Release date Genres Overview
      </div>
    </div>
  );
};

export default Modal;
