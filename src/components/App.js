import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


/*
Core Deliverables
As a user:
I can mark a plant as "sold out".
I can search for plants by their name and see a filtered list of plants.
*/


function App() {


  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
