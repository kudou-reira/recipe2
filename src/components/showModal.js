import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


export default class ListItemModal extends Component {

  constructor(props) {
    super(props)
    const { title, content, url } = props.item
    this.state = {
      show: false,
      tempTitle: title,
      tempContent: content,
      tempPhotoURL: url,
      tempItem: this.props.item
    }

    this.handleClick = this.handleClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
    
componentWillReceiveProps (nextProps) {
  if (nextProps.item !== this.props.item) {
    this.setState({
      tempTitle: nextProps.item.title,
      tempContent: nextProps.item.content,
      tempPhotoURL: nextProps.item.url,
      tempItem: nextProps.item
    })
  }
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
    
 deleteRecipe(){
    var tempKey = this.props.item.key;
    this.props.actions.deleteObj(tempKey);
    this.closeModal();
 }

 saveRecipe() {
    var tempKey = this.props.item.key;
    const { tempTitle, tempContent, tempPhotoURL } = this.state;
    this.props.actions.updateObj({ tempKey, tempTitle, tempContent, tempPhotoURL });
    this.closeModal();
  }

  renderModal() {
      return(
        <div className="modal-container">
            <Modal show={true} onHide={this.closeModal}>
              <Modal.Header closeButton={true}>
                  <Modal.Title id="contained-modal-title" className="modalTitle">{this.props.item.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="modalIMG">
                    <img src = {this.state.tempPhotoURL} className = "adjustModal" />
                  </div>
                  <form className="form-group">
                       <label>Recipe Name</label>
                       <input
                          type='text'
                          className="form-control"
                          value={this.state.tempTitle}
                          name="tempTitle"
                          onChange={this.handleChange}
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
                       <textarea
                          rows="9"
                          type='text'
                          className="form-control"
                          value={this.state.tempContent}
                          name="tempContent"
                          onChange={this.handleChange}
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
                <Button bsStyle="primary" onClick={this.saveRecipe.bind(this)} >
                    Update Card
                </Button>
                <Button bsStyle="danger" onClick={this.deleteRecipe.bind(this)} >
                    Delete Card
                </Button>
                <Button bsStyle="success" onClick={this.closeModal.bind(this)}>Close</Button>
             </Modal.Footer>
            </Modal>
        </div>
      )
  }



  render() {
    return (
      <div className="container-fluid ellipsis wrapButton ">
        <button
          type="button"
          className="btn btn-info"
          onClick={this.handleClick}
        >
          {this.props.item.title}
        </button>
        {this.state.show ? this.renderModal() : null}
      </div>
    );
  }
}
