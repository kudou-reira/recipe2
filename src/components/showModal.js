import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';



export default class FoodItemModal extends Component {

  constructor(props) {
    super(props)
    const { food, ingredients, url } = props.item
    this.state = {
      show: false,
      tempFood: food,
      tempIngr: ingredients,
      tempURL: url,
      tempItem: this.props.item
    }

    this.handleClick = this.handleClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

//componentDidUpdate () {
//  if (this.state.tempItem.length !== this.props.item.length) {
//    this.setState({
//      tempFood: food,
//      tempIngr: ingredients,
//      tempURL: url,
//      tempItem: this.props.item
//    })
//  }
//}
    
componentWillReceiveProps (nextProps) {
  if (nextProps.item !== this.props.item) {
    this.setState({
      tempFood: nextProps.item.food,
      tempIngr: nextProps.item.ingredients,
      tempURL: nextProps.item.url,
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
    const { tempFood, tempIngr, tempURL } = this.state;
    this.props.actions.updateObj({ tempKey, tempFood, tempIngr, tempURL });
    this.closeModal();
  }

  renderModal() {
      return(
        <div className="modal-container">
            <Modal show={true} onHide={this.closeModal}>
              <Modal.Header closeButton={true}>
                  <Modal.Title id="contained-modal-title" className="modalTitle">{this.props.item.food}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="modalIMG">
                    <img src = {this.state.tempURL} />
                  </div>
                  <form className="form-group">
                       <label>Recipe Name</label>
                       <input
                          type='text'
                          className="form-control"
                          value={this.state.tempFood}
                          name="tempFood"
                          onChange={this.handleChange}
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
                       <textarea
                          rows="12"
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
                <Button bsStyle="danger" onClick={this.deleteRecipe.bind(this)} >
                    Delete Recipe
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
          {this.props.item.food}
        </button>
        {this.state.show ? this.renderModal() : null}
      </div>
    );
  }
}
