import React, { Component } from 'react';
import IngredientProperties from './list_ingredients';
import * as ReactBootstrap from 'react-bootstrap';
import {connect} from 'react-redux';
import {newFood, newIngr, addFood, addIngr} from '../actions';
//import {Button, Modal} from 'react-bootstrap';
import Lockr from 'lockr';

let Button = ReactBootstrap.Button;
let Modal = ReactBootstrap.Modal;
//import RenderModal from './renderModal';


class NewRecipe extends Component {

  constructor(props) {
    super(props)
    const { modalStatus, key } = props
    this.state = {
      key: key,
      show: modalStatus,
      food: 'Recipe Name',
      ingredients: 'Enter Ingredients,Separated,By Commas'
    }
  }

 

  closeModal() {
    this.setState({show: false})
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
    
    this.props.addFood(this.props.food);
    console.log(this.props.food + " food store set");
     
    this.props.addIngr(this.props.ingredients);
    console.log(this.props.ingredients + " ingredients store set");
    
    //this.setState({props.item.food: this.props.food});
    this.closeModal();
  }
    

  /*
  renderModal() {
    return (
      <Modal show={true}>
        <Modal.Header closeButton={true} onHide={this.closeModal.bind(this)}>Test</Modal.Header>
        <Modal.Body>
          <h1>Please work!</h1>
        </Modal.Body>
      </Modal>
    )

  }
  */

  renderModal() {
      
      return(
        <div className="modal-container">
            <Modal show={this.state.show} onHide={this.closeModal.bind(this)}>
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
                    <Button onClick={this.closeModal.bind(this)}>Close</Button>
                 </Modal.Footer>
            </Modal>
        </div>
      )
  }



  render() {
    
    
    return (
      <div className="container">
        
        {console.log("running")}
        {console.log("in createNew and the state is " + this.state.show)}
        {console.log("in createNew and the key is " + this.props.key)}
        {console.log("in createNew and the food " + this.state.food)}
        {console.log("in createNew and the ingredients " + this.state.ingredients)}
        {this.state.show ? this.renderModal() : null}
        {/* Add your modal to another file and import here. Pass props to it. */}
        {/* Use react-bootstrap for easy modals */}
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

export default connect(mapStateToProps, {newFood, newIngr, addFood, addIngr})(NewRecipe);
