import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  const handleClick = () => {
    setInStock(prev => !prev)
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
