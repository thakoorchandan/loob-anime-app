import React from "react";

import "./ModalFooter.css";

const ModalFooter = ({ animeContent, refreshAnime }) => {
  return (
    <div className="footerContentUnderline">
      <div className="footercontent-head">
        <img
          className="footerSubLogo"
          src={animeContent?.logo}
          alt="footer logo"
        />
        <div className="footerFooterTitle">
          <label>{animeContent?.title}</label>
          <span>{animeContent?.subTitle}</span>
        </div>
        <div className="footercontent-button">
          <button onClick={refreshAnime}>REFRESH</button>
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
