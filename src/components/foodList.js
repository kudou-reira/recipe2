import React, {Component} from 'react';
import FoodProperties from './foodProps';
import NewRecipe from './createNew';
import {connect} from 'react-redux';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    };

    this.displayModal = this.displayModal.bind(this);
  }

  componentWillUpdate(){
    this.setModalStatus();
  }

  setModalStatus() {

    if(this.state.show === true){
      this.setState({show: false});
    }
  }

  displayModal() {

    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <div className="someDiv">
          <FoodProperties food={this.props.food}/>
          <button
              type="button"
              className="btn btn-info"
              onClick = {this.displayModal}
          >
            Add Recipe
          </button>
          {this.state.show ? <NewRecipe displayModal={this.displayModal} /> : null}
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {

    return {
        food: state.food
    };

};

export default connect(mapStateToProps)(FoodList);
