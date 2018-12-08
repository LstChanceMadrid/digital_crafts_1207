import React, { Component } from 'react'

export default class Logout extends Component {
  render() {
    return (
      <div>
        <h1>Are you sure you want to logout?</h1>

        <button>Yes</button>
        <button>No</button>
      </div>
    )
  }
}
