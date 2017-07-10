import React from 'react';
import FoodItemModal from './showModal';
import XCross from './xCross';

const FoodProps = (props) => {
    
  const foodItems = props.food.map((item, index) => {
    return (
//      <li key={index} className="list-group-item">
        <div className = "box" id="dark">
            <div className = "row">
                <div className="col-sm-4">
                        <div>
                            <XCross
                              item={item}
                              actions={props.actions}
                            />
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

export default FoodProps;

