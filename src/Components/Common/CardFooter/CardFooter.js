import React from "react";

import "./CardFooter.css";

function CardFooter({ animeContent, refreshAnime, isModalOpen }) {
  return (
    <div className={isModalOpen ? "cardContentUnderline" : "cardcontent"}>
      <div className="cardcontent-head">
        <img className="cardSubLogo" src={animeContent?.logo} alt="card logo" />
        <div className="cardFooterTitle">
          <label>{animeContent?.title}</label>
          <span>{animeContent?.subTitle}</span>
        </div>
        <div className="cardcontent-button">
          <button onClick={refreshAnime}>REFRESH</button>
        </div>
      </div>
    </div>
  );
}

export default CardFooter;
