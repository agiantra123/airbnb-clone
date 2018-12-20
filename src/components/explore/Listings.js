/*
 * @Author: agiantra123 
 * @Date: 2018-12-20 14:48:16 
 * @Last Modified by: agiantra123
 * @Last Modified time: 2018-12-20 16:09:56
 */

import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, Image } from 'react-native'

import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Listings extends Component {
  // To render list in scrollview horizontally
  renderListing() {
    const { listings } = this.props
    return listings.map((listing, index) => {
      return (
        <TouchableHighlight style={styles.card} key={`listing-${index}`}>
          <View style={styles.cardContent}>
            <Image 
              style={styles.image}
              source={listing.photo}
              resizeMode='contain'
            />
            <Text style={styles.titleContent}>{listing.title}</Text>
          </View>
        </TouchableHighlight>
      )
    })
  }
  render() {
    const { title } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>See all</Text>
            <Icon
              name={'angle-right'}
              size={18}
              color={colors.gray04}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {this.renderListing()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {

  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 21,
    paddingLeft: 21,
  },
  title: {
    color: colors.gray04,
  },
  seeAllBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  seeAllBtnText: {
    color: colors.gray04,
    marginRight: 5,
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 0, // Making it zero to make scrollview content exactly hides in the edge of screen 
  },
  scrollViewContent: {
    paddingRight: 10, 
    paddingLeft: 10,
  },
  card: {
    flexDirection: 'column',
    marginBottom: 16,
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    minHeight: 100,
  },
  cardContent: {
    
  },
  image: {
    // If you want to use height/width with undefined, please define flex
    flex: 1,
    height: 100,
    width: undefined,
    borderRadius: 4,
    marginBottom: 7,
  },
  titleContent: {
    paddingLeft: 4,
  }
})