import React from "react";
import CarCard from "./CarCard";

function Car() {
  // Antag att vi har en lista av bilar
  const cars = [
    {
      name: "Volvo XC60",
      info: "2023 model, 20000 km, diesel",
      price: 450000,
      image: "link-to-image/volvo-xc60.jpg",
    },
    {
      name: "BMW M3",
      info: "2022 model, 15000 km, petrol",
      price: 550000,
      image: "link-to-image/bmw-m3.jpg",
    },
    // lägg till fler bilar här...
  ];

  return (
    <div className="car-container">
      {cars.map((car) => (
        <CarCard key={car.name} car={car} />
      ))}
    </div>
  );
}

export default Car;
