import React from "react";
import data from "./cars.json";
import "./CarCard.css";

function Car() {
  return (
    <div>
      {data.map((car) => (
        <div key={car.name}>
          <img src={car.image} alt={car.name} className="car-card-image" />
          <h2 className="car-card-name">{car.name}</h2>
          <p className="car-card-info">{car.info}</p>
          <p className="car-card-price">{car.price} SEK</p>
          <button className="car-card-button">Köp nu</button>
        </div>
      ))}
    </div>
  );
}

export default Car;
