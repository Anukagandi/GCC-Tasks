import React from 'react';


const ListItem = React.memo(({ item }) => {
  console.log('Rendering:', item); 
  return <li>{item}</li>;
});

const List = ({ items }) => {
  console.log('Rendering List');

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default List;
