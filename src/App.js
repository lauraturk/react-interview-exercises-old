import "./stylesheets/APP.scss"

import React, { Component } from "react"

import AddColorForm from "./AddColorForm"
import ColorList from "./ColorList"
import { v4 } from "uuid"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [],
    }
    this.addColor = this.addColor.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {
    this.setState((prevState) => ({
      colors: [
        ...prevState.colors,
        {
          id: v4(),
          title,
          color,
          rating: 0,
        },
      ],
    }))
  }

  changeColor(id, property, newValue) {
    this.setState((prevState) => ({
      colors: prevState.colors.map((color) =>
        color.id !== id
          ? color
          : {
              ...color,
              [property]: newValue,
            }
      ),
    }))
  }

  removeColor(id) {
    this.setState((prevState) => ({
      colors: prevState.colors.filter((color) => color.id !== id),
    }))
  }

  render() {
    const { addColor, rateColor, removeColor } = this
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList
          colors={colors}
          onColorChange={(id, newValue) =>
            this.changeColor(id, "color", newValue)
          }
          onRate={(id, newValue) => this.changeColor(id, "rating", newValue)}
          onRemove={removeColor}
        />
      </div>
    )
  }
}
export default App
