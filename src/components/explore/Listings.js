/*
 * @Author: agiantra123 
 * @Date: 2018-12-20 14:48:16 
 * @Last Modified by: agiantra123
 * @Last Modified time: 2018-12-21 00:31:40
 */

import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, Image } from 'react-native'

import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeartButton from '../buttons/HeartButton'
import Stars from '../Stars'

export default class Listings extends Component {
  // To get random color for every listing types
  // Using get doesn't need '()' when calling. You type this.randomColor instead of this.randomColor()
  get randomColor() {
    const colorList = [
      colors.gray04,
      colors.darkOrange,
      colors.black,
      colors.brown01,
      colors.blue,
      colors.brown02,
      colors.green01,
    ]
    return colorList[Math.floor(Math.random() * colorList.length)]
  }
  // To render list in scrollview horizontally
  renderListing() {
    const { listings, showAddToFav } = this.props
    return listings.map((listing, index) => {
      return (
        <TouchableHighlight style={styles.card} key={`listing-${index}`}>
          <View>
            { showAddToFav ? 
              <View style={styles.addToFavoriteBtn}>
                <HeartButton color={colors.white} selectedColor={colors.pink} />
              </View> : null }
            <Image 
              style={styles.image}
              source={listing.photo}
              resizeMode='contain'
            />
            <Text style={[{color: this.randomColor}, styles.listingType]}>{listing.type}</Text>
            <Text 
              style={styles.listingTitle}
              numberOfLines={2}
            >
              {listing.title}
            </Text>
            <Text style={styles.listingPrice}>€{listing.price} {listing.priceType}</Text>
            <Stars votes={listing.stars} size={10} color={colors.green02} />
          </View>
        </TouchableHighlight>
      )
    })
  }
  render() {
    const { title, boldTitle } = this.props
    // To distinguish the title weight
    const titleStyle = boldTitle ? { fontSize: 22, fontWeight: '600' } : { fontSize: 18 }
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={[titleStyle, styles.title]}>{title}</Text>
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
    marginBottom: 20,
    marginLeft: 0, // Making it zero to make scrollview content exactly hides in the edge of screen
  },
  scrollViewContent: {
    paddingRight: 10, 
    paddingLeft: 10,
  },
  card: {
    flexDirection: 'column',
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    minHeight: 100,
  },
  image: {
    // If you want to use height/width with undefined, please define flex
    flex: 1,
    height: 100,
    width: undefined,
    borderRadius: 4,
    marginBottom: 7,
  },
  addToFavoriteBtn: {
    position: 'absolute',
    top: 5,
    right: 11,
    zIndex: 99,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray04,
    paddingLeft: 4,
    marginTop: 2,
  },
  listingType: {
    fontSize: 10,
    fontWeight: '700',
    paddingLeft: 4,
  },
  listingPrice: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.gray04,
    paddingLeft: 4,
    marginTop: 4,
    marginBottom: 2,
  }
})