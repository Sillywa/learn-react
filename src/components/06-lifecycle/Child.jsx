import React, { Component } from 'react'

export class Child extends Component {
  constructor(props) {
    super(props)
  }
  // updating
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.title === this.props.title) return false
    return true
  }
  render() {
    console.log("child render");
    return (
      <div>
        Child
      </div>
    )
  }
  
}

export default Child
