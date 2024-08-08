import React from 'react';

// Sample data
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
