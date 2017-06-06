import React from 'react';
import ModalClass from './showModal';

const FoodProperties = (props) => {

  const foodItems = props.food.map((item) => {
    return (
      <li key={item.key} className="list-group-item">
        <ModalClass item = {item} />
      </li>
    );
  });

  return <ul>{foodItems}</ul>
}

export default FoodProperties;
