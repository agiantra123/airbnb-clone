/**
 * All 'screens' of tab navigation like profile, setting, inbox, etc are considered as containers instead of screens
 */

import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SavedContainer extends Component {

  // To configure label and icon of the tab of Tab Navigator
  static navigationOptions = {
    tabBarLabel: 'SAVED',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={Platform.OS === "ios" ? "ios-heart-empty" : "md-heart-empty"}
        size={22}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View>
        <Text> SavedContainer </Text>
      </View>
    )
  }
}
