import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username :  null
        }
    }


    // decrementNumber = () => {
    //     if( this.props.passengerNumber > 0 ) {
    //             this.props.onDecrementNumber(this.state.passengerNumber)
    //         }
    //     }

    // incrementNumber = () => {
    //     this.props.onIncrementNumber(this.state.passengerNumber)
    // }

  render() {
      if (this.props.username === 'steven') {
        return (
            <header className="stepper">
                <h1>Header log = true</h1>
                <Link to ={ `/${this.props.username}/home`}>Home</Link>
                <Link  exact to = { `/${this.props.username}/my-movies`}>MyMovies</Link>
                <Link to = { `/${this.props.username}/logout`}>Logout</Link>

                Hello, {this.props.username}!
                <hr />
                
            </header>
          )
      } else {
          return (
            <header>
                <h1>Header log = false</h1>
                <Link to = "/">Home</Link>
                <Link to = "/login">Login</Link>
                <Link to = "/register">Register</Link>
                <hr />
            </header>
          )
      }
    
  }
}


const mapStateToProps = (state) => {
    return {
        username : state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)