import React from 'react';
import ListItemModal from './showModal';
import XCross from './xCross';
import Stagger from 'react-css-stagger';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const EntertainProps = (props) => {
    
  const listItems = props.list.map((item, index) => {
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
                            <ListItemModal
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
              {listItems}
            </ReactCSSTransitionGroup>
         </div>
}

export default EntertainProps;