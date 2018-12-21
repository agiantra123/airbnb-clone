import React, {Component} from 'react';

import LoggedIn from './src/screens/LoggedIn'
import TurnOnNotifications from './src/screens/TurnOnNotifications'
import CreateList from './src/screens/CreateList'

export default class App extends Component {
  render() {
    return (
      <CreateList />
    );
  }
}