import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../actions';
import Gallery from 'react-grid-gallery';


var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import EntertainProps from './entertainProps';
import NewCard from './createNew';


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
    
    const imgDataHold = this.props.list.map((item, index) => {
        return(
            {
                src: item.url,
                caption: item.title,
                thumbnail: item.url,
                isSelected: false
            }
        );
    });
    
    return (
      <div>
        <header className="pageHeader">
            <div className="container flex-container">
                <h3 className="recipeTitle">Anime/Manga To Watch List!</h3>
                    <button
                      type="button"
                      className="btn btn-info addButton"
                      onClick = {this.displayModal}
                    >
                        Add Card
                    </button>
            </div>
        </header>
        <div className= "container flex-container shadowBox">
           <Gallery images={imgDataHold}/>
        </div>
        <div className="someDiv">
          <div className="container">
              <ReactCSSTransitionGroup 
                transitionName="card"
                transitionAppear={true}
                transitionAppearTimeout={900}
                transitionEnter={false}
                transitionLeave={false}
              >
                <EntertainProps list={this.props.list} actions={this.props.actions} />
              </ReactCSSTransitionGroup>
              {this.state.show
                ? <NewCard
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


const mapStateToProps = ({ list }) => {
    return { list };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
