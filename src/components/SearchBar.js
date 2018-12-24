import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../styles/colors'

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Icon
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            size={26}
            color={colors.gray02}
            style={styles.searchIcon}
          />
          <Text style={styles.textInput}>Try "Cape Town"</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 70,
      backgroundColor: 'rgba(255,255,255,0.7)',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 99, // make searchbar always on the top, even when scrolling up
    },
    searchContainer: {
      height: 42,
      marginTop: 12,
      marginRight: 20,
      marginLeft: 20,
      backgroundColor: colors.white,
      borderWidth: 0.5,
      borderRadius: 3,
      borderColor: colors.gray03,
      elevation: 2, // Android only. Use shadow for iOs (https://facebook.github.io/react-native/docs/shadow-props). See 15:59
    },
    searchIcon: {
      position: 'absolute',
      top: 8,
      left: 18,
    },
    textInput: {
      marginTop: 10,
      marginLeft: 62,
      color: colors.gray02,
    }
})