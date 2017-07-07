import React, {Component} from 'react';
import FoodProperties from './food_props';
import food from '../lib/initialData';

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    // export this array of object from another file.
    // and then import it into this file

    this.state = {
      food,
      countFood: function() {
        return this.data.length
      }
    }
  };

  render() {
    return (
      <div>
        <div className="someDiv">
          <FoodProperties food={this.state.food}/>
        </div>
      </div>
    );
  }
}

export default FoodList;
