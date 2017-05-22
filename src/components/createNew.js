import React, { Component } from 'react';
import IngredientProperties from './listIngredients';
import { Button, Modal } from 'react-bootstrap';
import {connect} from 'react-redux';
import {newFood, newIngr, addFood, addIngr} from '../actions';
//import {Button, Modal} from 'react-bootstrap';
import Lockr from 'lockr';
//import RenderModal from './renderModal';


class NewRecipe extends Component {

  constructor(props) {
    super(props)
    const { modalStatus, key } = props
    this.state = {
      show: props.show,
      food: 'Recipe Name',
      ingredients: 'Enter Ingredients,Separated,By Commas'
    }
  }

  onNewFood(e) {

    this.props.newFood(e);
    console.log(this.props.food);
  }

  onNewIngr(e) {

    this.props.newIngr(e);
    console.log(this.props.ingredients);

  }

  saveRecipe() {

    this.setState({food: this.props.food});
    this.setState({ingredients: this.props.ingredients})

    this.props.addFood(this.props.food, this.props.ingredients);
    console.log(this.props.food + " food store set");

    this.props.addIngr(this.props.ingredients);
    console.log(this.props.ingredients + " ingredients store set");

    //this.setState({props.item.food: this.props.food});
    this.props.displayModal()
  }

  render() {
    return(
      <div className="modal-container">
          <Modal show={true} onHide={this.props.displayModal}>
          <Modal.Header closeButton={true}>
              <Modal.Title id="contained-modal-title">{this.state.food}</Modal.Title>
          </Modal.Header>

              <Modal.Body>
                  <form className="form-group">
                       <label>Recipe Name</label>
                       <input type='text'
                          className="form-control"
                          placeholder={this.state.food}
                          onChange = {e => this.onNewFood(e.target.value)} />
                       <label>Ingredients</label>
                       <textarea type='text'
                          className="form-control"
                          placeholder={this.state.ingredients}
                          onChange = {e => this.onNewIngr(e.target.value)} />
                   </form>
              </Modal.Body>

               <Modal.Footer>
                  <Button bsStyle="primary" onClick={this.saveRecipe.bind(this)} >
                      Save Recipe
                  </Button>
                  <Button onClick={this.props.displayModal}>Close</Button>
               </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {

    return {

        food: state.food

    };

};

export default connect(mapStateToProps, {newFood, newIngr, addFood, addIngr})(NewRecipe);
