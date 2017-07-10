import React, { Component } from 'react';

export default class XCross extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    deleteRecipe(){
        var tempKey = this.props.item.key;
        this.props.actions.deleteObj(tempKey);
    }

    render() {
      return (
        <div className = "containerCross divCross">
          <img src = 'https://malialitman.files.wordpress.com/2014/04/red-x.png' 
            className = "cross" 
            onClick={this.deleteRecipe.bind(this)}
          />
        </div>
      );
    }
}
