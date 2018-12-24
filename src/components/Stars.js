/*
 * @Author: agiantra123 
 * @Date: 2018-12-20 22:52:31 
 * @Last Modified by: agiantra123
 * @Last Modified time: 2018-12-21 00:35:03
 */

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Stars extends Component {
    get renderStars() {
        const { votes, size, color } = this.props
        const starNumber = parseInt(votes)
        const starElements = []
        for(let i = 0; i < 5; i++) {
            starElements.push(
                <Icon
                    key={`star-${i}`}
                    name='star'
                    size={size}
                    color={i < starNumber ? color : colors.gray02}
                    style={styles.star}
                />
            )
        }
        return starElements
    }
    render() {
        const { votes } = this.props

        // Hiding this component (stars and votes number) if there is no star
        if(votes == '0') {
            return <View></View>
        }
        
        return (
            <View style={styles.wrapper}>
                <View style={styles.stars}>
                    {this.renderStars}
                </View>
                {votes ? <Text style={styles.votesNumber}>{votes}</Text> :  null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: { // This makes stars and text beside as row
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 1,
    },
    stars: { // This makes stars as row
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 3,
    },
    star: {
        marginRight: 1,
    },
    votesNumber: {
        fontSize: 11,
        fontWeight: '600',
        marginLeft: 3,
    }
})