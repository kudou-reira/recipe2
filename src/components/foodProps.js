import React from 'react';
import FoodItemModal from './showModal';
import XCross from './xCross';
import Stagger from 'react-css-stagger';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const FoodProps = (props) => {
    
  const foodItems = props.food.map((item, index) => {
    return (
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
    );
  });

  return <div>
            <ReactCSSTransitionGroup
              transitionName="card"
              transitionEnterTimeout={1100}
              transitionLeaveTimeout={800}>
              {foodItems}
            </ReactCSSTransitionGroup>
         </div>
}

export default FoodProps;