import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


//I can add a new plant to the page by submitting the form.
//I can search for plants by their name and see a filtered list of plants.

const BASE_URL = "http://localhost:6001/plants"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchPlants, setSearchPlants] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(data => {
        setPlants(data)
        setSearchPlants(data)
      })

  }, [])

  const handleSeach = (e) => {
    const searchPlant = searchPlants.filter(plant => plant.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setPlants(searchPlant)
  }


  return (
    <main>
      <NewPlantForm plants={plants} />
      <Search handleSeach={handleSeach} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
