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
        console.log(this.state.username)
        console.log(this.state)
        console.log(this.props)
        this.props.onUsernameChange(this.state.username)
    }

    handleUsernameTextBox = (e) => {
        this.setState({
            username : e.target.value
        })
    }




  render() {
    return (
      <div>
        <h1>Hello Login</h1>
        <label>Username</label>
        <input type="text" onChange={this.handleUsernameTextBox} name="username" placeholder="Username" />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <button onClick={this.handleLoginButton}>Login</button>
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
