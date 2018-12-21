/*
 * @Author: agiantra123 
 * @Date: 2018-12-21 19:11:22 
 * @Last Modified by: agiantra123
 * @Last Modified time: 2018-12-21 19:18:08
 */

import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import colors from '../styles/colors'

export default class CreateList extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.heading}>Create a list</Text>
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: colors.white,
    },
    scrollView: {
        height: '100%',
    },
    heading: {
        fontSize: 28,
        fontWeight: '800',
        color: colors.lightBlack,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 15,
    }
})