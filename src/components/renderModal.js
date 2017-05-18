import React from 'react';
import {Button, Modal} from 'react-bootstrap';

/*

export default class RenderModal extends React.Component{

    constructor(props) {
        super(props)

        const { food, ingredients } = props.item
        this.state = {
          show: props.modal,
          food,
          ingredients

        }
    }

    componentWillReceiveProps(nextProps){
        console.log(this.state.show)
        if(this.state.show!==nextProps.modal){
            this.setState({show: nextProps.modal})
      }
    }


    render(){

        let close = () => this.setState({show: false});

        return (

          <div className="modal-container">
            <Modal
              show={this.props.modal}
              onHide={close}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Edit Recipe</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                     <form className="form-group">
                         <label>Recipe</label>
                         <input type='text' className="form-control">

                         </input>
                         <label>Ingredients</label>
                         <textarea type='text' className="form-control" defaultValue = {this.props.item.ingredients} />
                     </form>
              </Modal.Body>

              <Modal.Footer>
                <Button bsStyle="primary">Edit Recipe</Button>
                <Button onClick={close}>Close</Button>
              </Modal.Footer>

            </Modal>
          </div>
        );
    }
}

*/
