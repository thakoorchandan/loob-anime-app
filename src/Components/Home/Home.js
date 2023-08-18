import React, { useEffect, useState } from "react";
import getNewAnime from "../../Providers/animeService";

import Modal from "../Modal/Modal";

import "./Home.css";
import CardFooter from "../Common/CardFooter";

function Home({ token }) {
  const [anime, setAnime] = useState({});
  const [currentDate, setCurrentDate] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    setCurrentDate({
      weekDay: date.toLocaleString("en-IN", { weekday: "long" }).toUpperCase(),
      day: date.toLocaleString("en-IN", { day: "numeric" }),
      month: date.toLocaleString("en-IN", { month: "long" }).toUpperCase(),
    });
    getRefreshAnime();
  }, [token]);

  const getRefreshAnime = () => {
    getNewAnime(token).then((data) => {
      console.log(data.content);
      setAnime(data?.content);
    });
  };

  return (
    <div className="card-view">
      <div className="cardDate">
        <h6>{`${currentDate?.weekDay} ${currentDate?.day} ${currentDate?.month}`}</h6>
        <h1>Today</h1>
      </div>
      <div
        onClick={() => {
          setModalOpen(true);
        }}
        className="card-header"
      >
        <image
          className="headerImage"
          src={anime?.mainImage}
          alt="card banner"
        />
      </div>
      <CardFooter
        animeContent={anime}
        refreshAnime={getRefreshAnime}
        isModalOpen={modalOpen}
      />
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          content={anime}
          isModalOpen={modalOpen}
          refreshAnime={getRefreshAnime}
        />
      )}
    </div>
  );
}

export default Home;
