import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantsArr, handleAddPlant, handleSearch }) {




  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plantsArr={plantsArr} />
    </main>
  );
}

export default PlantPage;