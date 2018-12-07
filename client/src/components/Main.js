
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './main/Login'

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


    // console.log('handle button')
    // this.props.onHandleButton(e.target.value)
    // console.log(this.state)
    // console.log(this.props)
  }


  render() {
    return (
      <div>
          <h1>Main</h1>
          <input type="text" onChange={this.handleButton} />
          <button onClick={this.handleButton}>button</button>
          <div>{this.props.username}</div>hi
          {this.state.username}
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