import React, { Component } from 'react'
// import '../stylesheets/Star.scss'


export default class Star extends Component {
  render () {
    return (
      <div
        className={(this.props.selected) ? 'star selected' : 'star'}
        onClick={this.props.onClick}
      />
    )
  }
}
