import React from 'react';
import { FixedSizeList as List } from 'react-window';

// Sample data
const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => (
  <div style={style}>
    {items[index]}
  </div>
);

const VirtualizedList = () => {
  return (
    <List
      height={400} 
      itemCount={items.length} 
      itemSize={35} 
      width={300} 
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
