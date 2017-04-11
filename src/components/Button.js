import React, { Component } from 'react'

class Button extends Component {
  _reset = () => {
    this.props.reset()
  }
  render () {
    return (
      <button className='victory' onClick={this._reset}>
        Reset
      </button>
    )
  }
}
export default Button
