import React, {Component} from 'react';
import FoodProperties from './food_props';
import food from '../lib/initialData';
import NewRecipe from './createNew';
import {connect} from 'react-redux';

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    // export this array of object from another file.
    // and then import it into this file

      this.state = {
        food,
        key: 0,
        show: false,
        firstRender: true
    }
  };

  makeNewRecipe(key) {
    //rerenders the state
    this.setState({show: true});
    console.log("clicked and the key is");
    this.setState({key: this.state.food.length})
    console.log(this.state.food.length);
  }
    
  updateAll(){
      this.setState({food: this.props.food})
  }
    


  render() {
    return (
      <div>
        <div className="someDiv">
          {console.log("haven't updated food yet")}
          {console.log(this.props.food)}
          {console.log(this.props.ingredients)}
          
          <FoodProperties food={this.state.food}/>
          <button
              type="button"
              className="btn btn-info"
              onClick = {() => this.makeNewRecipe()}
          >
            Add Recipe
          </button>
          {console.log("in food list right now and "+ this.state.show + " " + this.state.key)}
          <NewRecipe modalStatus={this.state.show} key={this.state.key} />
          
        </div>
      </div>
        
    );
  }
}

const mapStateToProps = state => {

    return {
        
        food: state.box.food,
        ingredients: state.box.ingredients
        
    };
    
};

export default connect(mapStateToProps)(FoodList);