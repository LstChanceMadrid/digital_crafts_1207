
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './main/Login'
import Register from './main/Register'
import Home from './main/Home'
import { Route, Switch } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username : ""
    }
  }

  handleButton = (e) => {
    this.setState({
      username : e.target.value
    }, this.props.onHandleButton(e.target.value))

  }


  render() {
    return (
      <div>
          {this.props.children}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    username : state.username
  }
}

const mapDispatchToProps = dispatch => {
  
  return {
    onHandleButton: () => dispatch({type: "BUTTON", payload: {username : 'bob'}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)