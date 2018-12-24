import React, { Component } from 'react'

import transparentHeaderStyle from '../styles/navigation'
import LoggedInTabNavigator from '../navigators/LoggedInTabNavigator'

export default class LoggedIn extends Component {

  // To configure label and icon of the tab of Stack Navigator (will be used later)
  static navigationOptions = {
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    gesturesEnabled: false
  }

  render() {
    return (
      <LoggedInTabNavigator />
    )
  }
}
