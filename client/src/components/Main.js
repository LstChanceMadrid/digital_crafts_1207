
import React, { Component } from 'react'
import { connect } from 'react-redux'


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username : ""
    }
  }


  render() {
    return (
      <main>
          {this.props.children}
      </main>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)