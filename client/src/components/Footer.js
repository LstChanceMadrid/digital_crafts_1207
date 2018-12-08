
import React, { Component } from 'react'
import { connect } from 'react-redux';


class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <h1>Footer</h1>
      </footer>
    )
  }
}

export default connect()(Footer)