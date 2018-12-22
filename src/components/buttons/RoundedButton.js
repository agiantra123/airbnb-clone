/*
 * @Author: agiantra123 
 * @Date: 2018-12-22 12:52:44 
 * @Last Modified by: agiantra123
 * @Last Modified time: 2018-12-22 13:51:35
 */

import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

import colors from '../../styles/colors'

export default class RoundedButton extends Component {
    render() {
        const { 
            text, // text on the button
            colorp, // color of text
            backgroundColorp, // color of background
            handlePress, // called when clicked
            icon,
        } = this.props
        // To set default value
        const color = colorp || colors.black
        const backgroundColor = backgroundColorp || colors.green01 // 'transparant'
        return (
            <TouchableHighlight 
                style={[styles.wrapper, {backgroundColor}]}
                underlayColor={backgroundColor}
                onPress={handlePress}
            >
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text style={[styles.buttonText, {color}]}>{text}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center',
    }
})