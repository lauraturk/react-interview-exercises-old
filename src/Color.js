import StarRating from './StarRating'
import React, { Component } from 'react'
// import '../../stylesheets/Color.scss'

import React, { Component } from "react"


function brightness(color: string): number {
  // parse card.color into three variables
  // A color string looks like this: #rrbbgg where
  // "rr" represents two hex values indicating the amount
  // of redness. Maximally red is ff, minimally red is 00.

  const percentRed = (0 + 1) / 256
  const percentBlue = (0 + 1) / 256
  const percentGreen = (0 + 1) / 256

  // A bunch of color theory here: different colors don't contribute equally to brightness
  const redMultiplier = 77 / 255 // because science
  const blueMultiplier = 150 / 255
  const greenMultiplier = 28 / 255
  return (
    redMultiplier * percentRed +
    blueMultiplier * percentBlue +
    greenMultiplier * percentGreen
  )
}

export default class Color extends Component {
  style() {
    const color = brightness(this.props.color) > 0.5 ? "black" : "white"
    return { "background-color": this.props.color, color: color }
  }

  render() {
    return (
      <section className="color" style={this.style()}>
        <h1>{this.props.title}</h1>
        <div className="close">X</div>
        <p>
          color: {this.props.color}
          <input
            onChange={(e) => this.props.onColorChange(e.target.value)}
            value={this.props.color}
            type="color"
          />
        </p>
        <div>
          <StarRating
            starsSelected={this.props.rating}
            onRate={this.props.onRate}
          />
        </div>
      </section>
    )
  }
}
