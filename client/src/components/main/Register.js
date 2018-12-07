import React, { Component } from 'react'
import { connect } from 'react-redux'

class Register extends Component {














  render() {
    return (
      <div>
          <h1>Hello! Register</h1>
          <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <button>Register</button>
      </div>
    )
  }
}


export default connect()(Register)