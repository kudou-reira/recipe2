import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Lockr from 'lockr';
import _ from 'lodash'


export default class ModalClass extends Component {

  constructor(props) {
    super(props)
    const { food, ingredients } = props.item
    this.state = {
      show: false,
      tempFood: food,
      tempIngr: ingredients
    }

    this.handleClick = this.handleClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    this.setState({show: true});
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  closeModal() {
    this.setState({show: false})
  }

 saveRecipe() {
    var tempKey = this.props.item.key;
    const { tempFood, tempIngr } = this.state;
    this.props.actions.updateObj({ tempKey, tempFood, tempIngr });
    this.closeModal();
  }

  renderModal() {
      return(
        <div className="modal-container">
            <Modal show={true} onHide={this.closeModal}>
              <Modal.Header closeButton={true}>
                  <Modal.Title id="contained-modal-title">{this.props.item.food}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form className="form-group">
                       <label>Recipe Name</label>
                       <input
                          type='text'
                          className="form-control"
                          value={this.state.tempFood}
                          name="tempFood"
                          onChange={this.handleChange}
                        />
                       <label>Ingredients</label>
                       <textarea
                          type='text'
                          className="form-control"
                          value={this.state.tempIngr}
                          name="tempIngr"
                          onChange={this.handleChange}
                        />
                   </form>
              </Modal.Body>
             <Modal.Footer>
                <Button bsStyle="primary" onClick={this.saveRecipe.bind(this)} >
                    Update Recipe
                </Button>
                <Button onClick={this.closeModal.bind(this)}>Close</Button>
             </Modal.Footer>
            </Modal>
        </div>
      )
  }



  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-info"
          onClick={this.handleClick}
        >
          {this.props.item.food}
        </button>
        {this.state.show ? this.renderModal() : null}
      </div>
    );
  }
}
