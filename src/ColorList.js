// import '../stylesheets/ColorList.scss'

import React, { Component } from "react"


export default class ColorList extends Component {
  render () {
    return (
      <div className='color-list'>
        {(this.props.colors.length === 0)
          ? <p>No Colors Listed. (Add a Color)</p>
          : this.props.colors.map(color =>
            <Color
              key={color.title}
              {...color}
              onRate={(rating) => this.props.onRate(color.title, rating)}
              onRemove={() => this.props.onRemove(color.title)}
            />
          )}
      </div>
    )
  }
}
