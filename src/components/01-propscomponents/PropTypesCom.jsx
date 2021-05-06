import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropTypesCom extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <div>propTypes: {this.props.title}</div>
    )
  }
}

export default PropTypesCom
