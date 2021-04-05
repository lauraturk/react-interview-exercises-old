import React, { Component } from "react"

import Star from "./Star"

export default class StarRating extends Component {
  render() {
    return (
      <div className="star-rating">
        {[...Array(5)].map((n, i) => (
          <Star
            key={i}
            selected={i < this.props.starsSelected} // TODO: EXPLAIN THIS.
            onClick={() => this.props.onRate(i + 1)}
          />
        ))}
        <p>
          {this.props.starsSelected} of {this.props.totalStars} stars
        </p>
      </div>
    )
  }
}
