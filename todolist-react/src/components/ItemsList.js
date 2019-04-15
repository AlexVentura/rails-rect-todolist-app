import React from 'react';

const ItemsList = props => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li key={index}>{item.description}</li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
