import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsArr }) {

  const everyPlant = plantsArr.map(plant => {
    return (
      <PlantCard plant={plant} key={plant.id} />
    )
  })



  return (
    <ul className="cards">{everyPlant}</ul>
  );
}

export default PlantList;