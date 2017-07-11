import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Lockr from 'lockr';

export default class NewRecipe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tempTitle: '',
      tempContent: '',
      tempPhotoURL: '',
      tempLink: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.saveRecipe = this.saveRecipe.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveRecipe() {
    const { tempTitle, tempContent, tempPhotoURL, tempLink } = this.state;
    this.props.actions.setNewObj({ tempTitle, tempContent, tempPhotoURL, tempLink });
    this.props.hideModal()
  }

  render() {
    return(
      <div className="modal-container">
          <Modal show={true} onHide={this.props.hideModal}>
          <Modal.Header closeButton={true}>
              <Modal.Title id="contained-modal-title"></Modal.Title>
          </Modal.Header>
              <Modal.Body>
                  <form className="form-group">
                       <label>Title</label>
                       <input type='text'
                          className="form-control"
                          placeholder="Add a Title"
                          value={this.state.tempTitle}
                          onChange={this.handleChange}
                          name="tempTitle"
                        />
                       <label className="labelGap">Photo URL</label>
                       <input type='text'
                          className="form-control"
                          placeholder="Add a Photo URL"
                          value={this.state.tempPhotoURL}
                          onChange={this.handleChange}
                          name="tempPhotoURL"
                        />
                       <label className="labelGap">Summary/Thoughts</label>
                       <textarea type='text'
                          rows="9"
                          className="form-control"
                          placeholder="Enter summary/synopsis/thoughts"
                          onChange={this.handleChange}
                          value={this.state.tempContent}
                          name="tempContent"
                        />
                        <label className="labelGap">Video URL</label>
                        <input type='text'
                          className="form-control"
                          placeholder="Add a Video URL (Youtube/Vimeo)"
                          value={this.state.tempLink}
                          onChange={this.handleChange}
                          name="tempLink"
                        />
                   </form>
              </Modal.Body>

               <Modal.Footer>
                  <Button bsStyle="primary" onClick={this.saveRecipe} >
                      Save Card
                  </Button>
                  <Button bsStyle="success" onClick={this.props.hideModal}>Close</Button>
               </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
