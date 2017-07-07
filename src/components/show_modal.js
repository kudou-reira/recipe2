import React, { Component } from 'react';
import IngredientProperties from './list_ingredients';
import * as ReactBootstrap from 'react-bootstrap';
//import {Button, Modal} from 'react-bootstrap';

let Button = ReactBootstrap.Button;
let Modal = ReactBootstrap.Modal;
//import RenderModal from './renderModal';


export default class ModalClass extends Component {

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
                <Modal.Title id="contained-modal-title">{this.props.item.food}</Modal.Title>
            </Modal.Header>
                
                <Modal.Body>
                  <h1>Please work!</h1>
                </Modal.Body>
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
          {this.props.item.food}
        </button>
        {this.state.show ? this.renderModal() : null}
        {/* Add your modal to another file and import here. Pass props to it. */}
        {/* Use react-bootstrap for easy modals */}
      </div>
    );
  }
}
