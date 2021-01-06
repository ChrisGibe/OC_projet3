import React from "react";
import Modal from "react-modal";

import "./MovieCard.css";

Modal.setAppElement("#___gatsby");

const MovieCard = ({ title, date, realisator, scenario, actors, kind, duration, trailer, image }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="button" aria-label={`Open ${title} modal`} className="btn-open" style={{ backgroundImage: `url(${image})`}} onClick={openModal}></button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" contentLabel="Example Modal">
        <h2>{title}</h2>
        <button className="btn-modal-close" onClick={closeModal}>
          Fermer
        </button>
        <div className="modal-content">
          <div className="modal-text">
            <span>Date de projetction :</span>
            <p>{date}</p>
            <span>Réalisateur :</span>
            <p>{realisator}</p>
            <span>Scénarion :</span>
            <p>{scenario}</p>
            <span>Acteurs :</span>
            <p>{actors}</p>
            <span>Genre :</span>
            <p>{kind}</p>
            <span>Durée :</span>
            <p>{duration}</p>
          </div>
          {trailer}
        </div>
      </Modal>
    </div>
  );
};

export default MovieCard;
