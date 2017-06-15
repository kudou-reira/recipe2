import React from 'react';
import FoodItemModal from './showModal';

const FoodProperties = (props) => {

  const foodItems = props.food.map((item, index) => {
    return (
      <li key={index} className="list-group-item">
        <FoodItemModal
          item={item}
          actions={props.actions}
        />
      </li>
    );
  });

  return <ul>{foodItems}</ul>
}

export default FoodProperties;
