import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function NewPlantForm({ handleAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    id: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    const newPlant = ({
      name: formData.name,
      image: formData.image,
      price: formData.price,
      id: uuidv4()
    })
    handleAddPlant(newPlant)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;