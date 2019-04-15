import React from 'react';

const ItemsList = props => {
  console.info("itemList: ", props)

  return (
    <ul>
      {
        props.items.map((item, index) => <li key={index}>{item.description}</li>)
      }
    </ul>
  );
};

export default ItemsList;
