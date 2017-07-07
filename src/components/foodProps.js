import React from 'react';
import FoodItemModal from './showModal';

const FoodProperties = (props) => {

  const foodItems = props.food.map((item, index) => {
    return (
//      <li key={index} className="list-group-item">
        <div className = "box">
            <div className = "row">
                <div className="col-sm-4">
                        <div>
                            <div className="lowGap">
                                <img src = {item.url} />
                            </div>
                        
                            <FoodItemModal
                              item={item}
                              actions={props.actions}
                            />
                        </div>
                </div>
            </div>
        </div>
//      </li>
    );
  });

  return <ul>{foodItems}</ul>
}

export default FoodProperties;
