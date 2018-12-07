
import React, { Component } from 'react'
import { connect } from 'react-redux';


class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>Footer</h1>
      </div>
    )
  }
}

export default connect()(Footer)