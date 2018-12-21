/**
 * All 'screens' of tab navigation like profile, setting, inbox, etc are considered as containers instead of screens
 */

import React, { Component } from 'react'
import { Text, View, Platform, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../styles/colors'
import NoResults from '../components/saved/NoResult'

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
      <View style={styles.wrapper}>
        <NoResults />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
})