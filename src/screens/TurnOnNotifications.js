import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../styles/colors'
import { transparentHeaderStyle } from '../styles/navigation'

export default class TurnOnNotifications extends Component {

    // To configure label and icon of the tab of Stack Navigator (will be used later)
    static navigationOptions = {
        headerLeft: null,
        headerStyle: transparentHeaderStyle,
        gesturesEnabled: false
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.content}>
                    <Icon
                        name='comments-o'
                        size={46}
                        style={styles.icon}
                    />
                    <Text style={styles.title}>
                        Turn on notifications?
                    </Text>
                    <Text style={styles.description}>
                        We can let you know when someone messages you, or notify you about other important account activity
                    </Text>
                    <TouchableHighlight style={styles.notifyButton} onPress={() => {}} underlayColor={colors.green02}>
                        <Text style={styles.buttonText}>Yes, notify me</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.skipButton} onPress={() => {}} underlayColor={colors.gray01}>
                        <Text style={[styles.buttonText, { color: colors.green01 }]}>Skip</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        marginTop: 60,
        paddingRight: 20,
        paddingLeft: 20
    },
    icon: {
        color: colors.green01,
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: colors.black,
    },
    description: {
        fontSize: 16,
        color: colors.black,
        paddingRight: 30,
        marginTop: 15,
        lineHeight: 22,
    },
    notifyButton: {
        width: 160,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 30,
        borderRadius: 3,
        backgroundColor: colors.green01
    },
    skipButton: {
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: colors.green01,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.white,
        alignSelf: 'center',
    }
})
