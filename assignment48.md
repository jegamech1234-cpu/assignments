import React from "react";

const VegetablesList = () => {
  const vegetables = [
    { name: "carrot", color: "orange", price: 30 },
    { name: "potato", color: "brown", price: 20 },
  ];

  return (
    <div>
      <h2>Vegetable List</h2>
      <ul>
        {vegetables.map((item, index) => (
          <li key={index}>
            {item.name} - {item.color} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegetablesList;
