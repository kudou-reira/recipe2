import React from 'react';
import Modal from './show_modal';

const FoodProperties = (props) => {

  

  const foodItems = props.food.map((item, index) => {
    console.log('food item', item)
    return (
      <li key={index} className="list-group-item">
        <Modal item={item} />
      </li>
    );
  });

  return <ul>{foodItems}</ul>
}

export default FoodProperties;
