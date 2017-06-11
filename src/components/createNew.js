import React, { Component } from 'react';
import IngredientProperties from './listIngredients';
import { Button, Modal } from 'react-bootstrap';
import {connect} from 'react-redux';
import {setNewObj} from '../actions';
//import {Button, Modal} from 'react-bootstrap';
import Lockr from 'lockr';
//import RenderModal from './renderModal';


class NewRecipe extends Component {

  constructor(props) {
    super(props)
    const { modalStatus, key } = props
    this.state = {
      show: true,
      food: 'Recipe Name',
      ingredients: 'Enter Ingredients,Separated,By Commas',
      tempFood: '',
      tempIngr: ''
    }
  }

  closeModal() {
    this.setState({show: false})
  }

  onNewFood(e) {
    this.setState({tempFood: e});
  }

  onNewIngr(e) {
    this.setState({tempIngr: e});
  }

  saveRecipe() {

    const {tempFood, tempIngr} = this.state;
    this.props.setNewObj({tempFood, tempIngr});
    this.setState({show: false})
  }

  render() {
    return(
      <div className="modal-container">
          <Modal show={this.state.show} onHide={this.props.displayModal}>
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

export default connect(mapStateToProps, {setNewObj})(NewRecipe);
