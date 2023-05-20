import React from "react";
import HeroImg from "./hero-fon.png";
import "./_hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <img src={HeroImg} alt="img" className="hero__container--img" />
      <div className="hero__container">
        <h1 className="hero__container--title">
          Turnkey Repair in the <br /> city of{" "}
          <span className="hero__container--title__gold">Rostov-on-Don</span>
        </h1>

        <p className="hero__container--description">
          Get ready-made turnkey repairs on time
          <br/>
          with work time saving up to 45 days and <br className="mobile-br"/> 20% from
          <br className="desktop-br"/>
          cost of materials due to the organization of <br className="mobile-br"/> work
        </p>

        <div className="hero__container--btns">
          <button className="hero__container--btns__calculate-btn">
            CALCULATE THE COST
          </button>
          <button className="hero__container--btns__submit-btn">
            SUBMIT YOUR APPLICATION
          </button>
        </div>
      </div>
    </div>
  );
}
