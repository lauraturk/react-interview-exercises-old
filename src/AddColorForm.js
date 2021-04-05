import "./stylesheets/AddColorForm.scss"

import React, { Component } from "react"

export default class AddColorForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: "",
      color: "#000000",
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onNewColor(this.state.title, this.state.color)
    this.setState({ title: "", color: "#000000" })
  }

  render() {
    return (
      <form className="add-color" onSubmit={this.handleSubmit}>
        <input
          onChange={(e) => this.setState({ title: e.target.value })}
          value={this.state.title}
          type="text"
          placeholder="color title..."
        />
        <input
          onChange={(e) => this.setState({ color: e.target.value })}
          value={this.state.color}
          type="color"
          required
        />
        <button type="submit"> ADD </button>
      </form>
    )
  }
}
