/*
 * @Author: agiantra123 
 * @Date: 2018-12-20 22:23:23 
 * @Last Modified by: agiantra123
 * @Last Modified time: 2018-12-21 00:10:39
 */

import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class HeartButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addedToFavorite: false
        }
        this.addToFavorite = this.addToFavorite.bind(this)
    }   
    addToFavorite() {
        // alert('Added to favorite')
        const { addedToFavorite } = this.state
        this.setState({
            addedToFavorite: !addedToFavorite
        })
    }
    render() {
        const { addedToFavorite } = this.state
        const { color, selectedColor } = this.props
        return (
            <TouchableOpacity
                onPress={this.addToFavorite}
            >
                <Icon
                    name={addedToFavorite ? 'heart' : 'heart-o'}
                    color={addedToFavorite ? selectedColor : color}
                    size={18}
                />
                <Icon
                    name='heart-o'
                    color={color}
                    size={18}
                    style={styles.selectedIcon}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    selectedIcon: {
        position: 'absolute', 
        top: 0, 
        left: 0,
    }
})