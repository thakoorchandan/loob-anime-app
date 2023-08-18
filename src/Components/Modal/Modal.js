import React from "react";

import "./Modal.css";

import CardFooter from "../Common/CardFooter";
import ModalFooter from "../Common/ModalFooter";

const Modal = ({ setOpenModal, content, isModalOpen, refreshAnime }) => {
  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="modalWrapper">
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <img
            src={content.mainImage}
            alt="main image"
            className="modalImage"
          />
          <CardFooter
            animeContent={content}
            isModalOpen={isModalOpen}
            refreshAnime={refreshAnime}
          />
          <div
            className="modalText"
            dangerouslySetInnerHTML={{ __html: content?.text }}
          />
          <img
            src={content.thumbNailImage}
            alt="thumbnail image"
            className="modalImage"
          />
          <div
            className="modalText"
            dangerouslySetInnerHTML={{ __html: content?.text }}
          />
          <ModalFooter
            animeContent={content}
            isModalOpen={isModalOpen}
            refreshAnime={refreshAnime}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
