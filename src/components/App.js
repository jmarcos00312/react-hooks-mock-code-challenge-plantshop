import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const URL = 'http://localhost:6001/plants'
function App() {
  const [plantsArr, setPlantsArr] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => {
        setPlantsArr(data)
        setSearch(data)
      })
  }, [])

  const handleAddPlant = (newplant) => {
    fetch(URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newplant)
    })
      .then(r => r.json()).then(data => {
        setPlantsArr([...plantsArr, newplant])
      })
  }

  const handleSearch = (e) => {
    const searching = search.filter(search => search.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setPlantsArr(searching)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plantsArr={plantsArr} handleAddPlant={handleAddPlant} handleSearch={handleSearch} />
    </div>
  );
}

export default App;