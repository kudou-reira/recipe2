import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../actions';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import FoodProps from './foodProps';
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
        <header className="pageHeader">
            <div className="container flex-container">
                <h3 className="recipeTitle">Recipe List!</h3>
                    <button
                      type="button"
                      className="btn btn-info addButton"
                      onClick = {this.displayModal}
                    >
                        Add Recipe
                    </button>
            </div>
        </header>
        <div className="someDiv">
          <div className="container">
              <ReactCSSTransitionGroup 
                transitionName="card"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
              >
                <FoodProps food={this.props.food} actions={this.props.actions} />
              </ReactCSSTransitionGroup>
              {this.state.show
                ? <NewRecipe
                      hideModal={this.displayModal}
                      actions={this.props.actions}
                  />
                : null
              }
          </div>
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
