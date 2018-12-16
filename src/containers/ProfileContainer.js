/**
 * All 'screens' of tab navigation like profile, setting, inbox, etc are considered as containers instead of screens
 */

import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProfileContainer extends Component {

  // To configure label and icon of the tab of Tab Navigator
  static navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={Platform.OS === "ios" ? "ios-contact" : "ios-contact"}
        size={24}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View>
        <Text> ProfileContainer </Text>
      </View>
    )
  }
}
