/*
 * @Author: agiantra123 
 * @Date: 2018-12-21 14:37:02 
 * @Last Modified by:   agiantra123 
 * @Last Modified time: 2018-12-21 14:37:02 
 */

import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'

import colors from '../../styles/colors'

export default class NoResult extends Component {
  render() {
    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.heading}>Saved</Text>
                <Text style={styles.description}>Not every day is filled with adventures, but you can start planning for the next one.</Text>
                <Text style={styles.description}>Tap the heart on any home to start saving your favorite.</Text>
            </ScrollView>      
            <View style={styles.footer}>
                <TouchableHighlight style={styles.findHomeBtn} onPress={() => {}} underlayColor={colors.pink02}>
                    <Text style={styles.findHomeBtnText}>Find homes</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {

    },
    scrollView: {
        height: '100%',
        paddingRight: 20,
        paddingLeft: 20,
    },
    heading: {
        fontSize: 26,
        fontWeight: '600',
        color: colors.gray04,
        marginTop: 40,
        marginBottom: 30,
    },
    description: {
        fontSize: 16,
        color: colors.gray04,
        lineHeight: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        // right: 0,
        width: '100%',
        height: 80,
        borderTopWidth: 1,
        borderTopColor: colors.gray05,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 20,
        paddingLeft: 20,
    },
    findHomeBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pink,
        borderRadius: 3,
    },
    findHomeBtnText: {
        fontWeight: '600',
        color: colors.white,
    }
})