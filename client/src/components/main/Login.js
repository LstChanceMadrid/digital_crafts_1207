import React, { Component } from 'react'
import { connect } from 'react-redux'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username : "",
            password : ""
        }
    }

    handleLoginButton = () => {

    }

  render() {
    return (
      <div>
        <h1>Hello Login</h1>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <button>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUsernameChange: () => dispatch({type: "USERNAME"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
