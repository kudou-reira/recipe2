import React, { Component } from 'react';
import IngredientProperties from './listIngredients';
import * as ReactBootstrap from 'react-bootstrap';
import {connect} from 'react-redux';
import {updateObj} from '../actions';
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
      ingredients,
      tempFood: '',
      tempIngr: ''
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

    this.setState({tempFood: e});
    console.log("this is the current food", this.state.tempFood);
    console.log("the current key is", this.props.item.key)
  }

  onRecipeChange(e) {

    this.setState({tempIngr: e});
    console.log("this is the current food", this.state.tempIngr);

  }

 saveRecipe() {
    var tempKey = this.props.item.key;
    const {tempFood, tempIngr} = this.state;
    this.props.updateObj({tempKey, tempFood, tempIngr});
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

        food: state.food

    };

};

export default connect(mapStateToProps, {updateObj})(ModalClass);
