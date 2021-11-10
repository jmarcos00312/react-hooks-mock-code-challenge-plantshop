import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const onePlantPer = plants.map(plant => {
    return <PlantCard plant={plant} key={plant.id} />
  })



  return (
    <ul className="cards">
      {onePlantPer}
    </ul>
  );
}

export default PlantList;
