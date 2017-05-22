import React from 'react';
import Modal from './showModal';

const FoodProperties = (props) => {

  const foodItems = props.food.map((item) => {
    return (
      <li key={item.key} className="list-group-item">
        {item.food}
      </li>
    );
  });

  return <ul>{foodItems}</ul>
}

export default FoodProperties;
