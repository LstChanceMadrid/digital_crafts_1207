import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actionCreator'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username : "",
            password : ""
        }
    }

    handleUsernameInput = (e) => {
        this.setState({
            ...this.state,
            username : e.target.value
        })
    }

  render() {
      console.log(this.props.match)
    return (
      <div>{this.props.username}
      
        <h1>Hello Login</h1>

        <label>Username</label>
        <input type="text" name="username" onChange={this.handleUsernameInput} placeholder="Username" />

        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <button onClick={this.props.onLogin}>Login</button>
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
    console.log('dispatch')

    return {
        onLogin: () => dispatch(actionCreators.onLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
