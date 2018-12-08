import React, { Component } from 'react'
import { connect } from 'react-redux'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.state,
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
  handleRegisterButton = () => {
    if (this.state.username === 'steve') {
      console.log('yes')
    }
  }












  render() {
    return (
      <div>
          <h1>Hello! Register</h1>
          <label>Username</label>
        <input type="text" name="username" onChange={this.handleUsernameInput} placeholder="Username" />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <button onClick={this.handleRegisterButton}>Register</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    username : state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {



  }
}





export default connect(mapStateToProps, mapDispatchToProps)(Register)