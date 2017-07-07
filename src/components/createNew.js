import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Lockr from 'lockr';

export default class NewRecipe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tempFood: '',
      tempIngr: '',
      tempURL: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.saveRecipe = this.saveRecipe.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveRecipe() {
    const { tempFood, tempIngr, tempURL } = this.state;
    this.props.actions.setNewObj({ tempFood, tempIngr, tempURL });
    this.props.hideModal()
  }

  render() {
    return(
      <div className="modal-container">
          <Modal show={true} onHide={this.props.hideModal}>
          <Modal.Header closeButton={true}>
              <Modal.Title id="contained-modal-title">{this.state.food}</Modal.Title>
          </Modal.Header>
              <Modal.Body>
                  <form className="form-group">
                       <label>Recipe Name</label>
                       <input type='text'
                          className="form-control"
                          placeholder="Add a Title"
                          value={this.state.tempFood}
                          onChange={this.handleChange}
                          name="tempFood"
                        />
                       <label className="labelGap">Photo URL</label>
                       <input type='text'
                          className="form-control"
                          placeholder="Add a Photo URL"
                          value={this.state.tempURL}
                          onChange={this.handleChange}
                          name="tempURL"
                        />
                       <label className="labelGap">Ingredients</label>
                       <textarea type='text'
                          rows="12"
                          className="form-control"
                          placeholder="Enter Ingredients Separated by Commas"
                          onChange={this.handleChange}
                          value={this.state.tempIngr}
                          name="tempIngr"
                        />
                   </form>
              </Modal.Body>

               <Modal.Footer>
                  <Button bsStyle="primary" onClick={this.saveRecipe} >
                      Save Recipe
                  </Button>
                  <Button bsStyle="warning" onClick={this.props.hideModal}>Close</Button>
               </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
