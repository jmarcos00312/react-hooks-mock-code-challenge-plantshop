import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const BASE_URL = "http://localhost:6001/plants"

function NewPlantForm({ plants }) {

  const [copyPlants, setCopyPlants] = useState(plants)
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: 0,
    id: ''
  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAddPlant = (e) => {
    e.preventDefault()
    const newPlant = ({
      name: formData.name,
      image: formData.image,
      price: formData.price,
      id: uuidv4()
    })
    fetch(BASE_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(plant => setCopyPlants(...copyPlants, plant))
    setFormData({
      name: '',
      image: '',
      price: 0,
      id: ''
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleAddPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
