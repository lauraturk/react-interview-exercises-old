import React, { Component } from 'react'
// import '../../stylesheets/AddColorForm.scss'

export default class AddColorForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: '',
      color: '#000000'
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onNewColor(this.state.title.value, this.state.color.value) // To ensure that data flows properly (two-way data binding)
    this.setState({ title: '', color: '#000000' })
  }

  render () {
    return (
      <form className='add-color' onSubmit={this.handleSubmit}>
        <input
          ref={input => ({ title: input })}
          type='text'
          placeholder='color title...' required
        />
        <input
          ref={input => ({ color: input })}
          type='color' required
        />
        <button> ADD </button>
      </form>
    )
  }
}
