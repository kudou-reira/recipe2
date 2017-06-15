import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions'

import FoodList from './foodProps';
import NewRecipe from './createNew';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    };

    this.displayModal = this.displayModal.bind(this);
  }

  displayModal() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <div className="someDiv">
          <FoodList food={this.props.food} actions={this.props.actions} />
          <button
              type="button"
              className="btn btn-info"
              onClick = {this.displayModal}
          >
            Add Recipe
          </button>
          {this.state.show
            ? <NewRecipe
              hideModal={this.displayModal}
              actions={this.props.actions}
              />
            : null
          }
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ food }) => {
    return { food };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
