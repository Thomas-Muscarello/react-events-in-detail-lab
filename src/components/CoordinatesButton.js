// Code CoordinatesButton Component Here

//Create a CoordinatesButton React component.
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
//takes in one prop: onReceiveCoordinates. This prop is a function passed down from index.js.
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
      //render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. 
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
    //Pass this event data in as the argument for the onReceiveCoordinates prop.
  }

} 