
import React, { Component } from 'react'
import Menu from './components/menu'
import { Route } from 'react-router-dom'

class Routes extends Component {
  render() {
    return <Route path="/" component={Menu} />
  }
}

export default Routes
