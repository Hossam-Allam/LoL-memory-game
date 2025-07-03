import React from "react";
import Tilt from "react-parallax-tilt";

function Card({ name, imageUrl, onClick }) {
  return (
    <Tilt
      className="card-tilt-wrapper"
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={600}
      scale={1.03}
      transitionSpeed={400}
      glareEnable={false}
    >
      <div className="card" onClick={onClick}>
        <div className="card-img-container">
          <img src={imageUrl} alt={name} className="card-img" />
        </div>
        <div className="card-name">{name}</div>
      </div>
    </Tilt>
  );
}
export default Card;
