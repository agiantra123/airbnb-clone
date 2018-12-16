/**
 * All 'screens' of tab navigation like profile, setting, inbox, etc are considered as containers instead of screens
 */

import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class InboxContainer extends Component {

  // To configure label and icon of the tab of Tab Navigator
  static navigationOptions = {
    tabBarLabel: 'INBOX',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={Platform.OS === "ios" ? "ios-notifications-outline" : "ios-notifications-outline"}
        size={24}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View>
        <Text> InboxContainer </Text>
      </View>
    )
  }
}
