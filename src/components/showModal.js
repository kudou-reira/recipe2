import React, { Component } from 'react';
import IngredientProperties from './listIngredients';
import * as ReactBootstrap from 'react-bootstrap';
import {connect} from 'react-redux';
import {foodChange, ingredientChange, setFood, setIngr} from '../actions';
//import {Button, Modal} from 'react-bootstrap';
import Lockr from 'lockr';

let Button = ReactBootstrap.Button;
let Modal = ReactBootstrap.Modal;
//import RenderModal from './renderModal';


class ModalClass extends Component {

  constructor(props) {
    super(props)
    const { food, ingredients } = props.item
    this.state = {
      show: false,
      food,
      ingredients
    }
  }


  handleClick({ food, ingredients }) {

      console.log(this.props.item);
      this.setState({show: true});
      console.log("show:" + this.state.show);
      //alert(food + ': \n' + ingredients);
  }

  closeModal() {
    this.setState({show: false})
  }
    
  onFoodChange(e) {
    
    this.props.foodChange(e);
    console.log(this.props.food);
  }
    
  onRecipeChange(e) {
    
    this.props.ingredientChange(e);
    console.log(this.props.ingredients);
    
  }
    
 saveRecipe() {
    
    this.setState({food: this.props.food});
    this.setState({ingredients: this.props.ingredients})
    
    this.props.setFood(this.props.food);
    console.log(this.props.food + " store set");
     
    console.log(this.props.ingredients);
    this.props.setIngr(this.props.ingredients);
    
    //this.setState({props.item.food: this.props.food});
    this.closeModal();
  }
    
  showInitialFood(){

     
    
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
                            defaultValue={this.state.food}
                            onChange = {e => this.onFoodChange(e.target.value)} />
                         <label>Ingredients</label>
                         <textarea type='text' 
                            className="form-control" 
                            defaultValue={this.state.ingredients}
                            onChange = {e => this.onRecipeChange(e.target.value)} />
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
    
    const { food, ingredients } = this.state
    
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => this.handleClick(this.props.item)}
        >
          {this.state.food}
        </button>
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

export default connect(mapStateToProps, {foodChange, ingredientChange, setFood, setIngr})(ModalClass);
