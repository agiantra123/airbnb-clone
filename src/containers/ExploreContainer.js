/**
 * All 'screens' of tab navigation like profile, setting, inbox, etc are considered as containers instead of screens
 */

import React, { Component } from 'react'
import { Text, View, Platform, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../styles/colors'
import categoriesList from '../data/Categories'
import SearchBar from '../components/SearchBar'
import Categories from '../components/explore/Categories'
import Listings from '../components/explore/Listings'
import listings from '../data/Listings'

export default class ExploreContainer extends Component {

  // To configure label and icon of the tab of Tab Navigator
  static navigationOptions = {
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={Platform.OS === "ios" ? "ios-search" : "md-search"}
        size={22}
        color={tintColor}
      />
    )
  }
  // To render listing (Experiences, Homes, etc) using array mapping in scrollview vertically
  renderListings() {
    return listings.map((listing, index) => {
      return (
        <View key={`listing-${index}`}>
          <Listings 
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
          />
        </View>
      )
    })
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <SearchBar />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>Explore Airbnb</Text>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
          {this.renderListings()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    paddingTop: 68,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.gray04,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  categories: {
    marginTop: 0,
    marginBottom: 40,
  }
})
