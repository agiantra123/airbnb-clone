/*
 * @Author: agiantra123 
 * @Date: 2018-12-21 21:35:39 
 * @Last Modified by: agiantra123
 * @Last Modified time: 2018-12-22 14:37:36
 */

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton'

export default class LoggedOut extends Component {
    onFacebookPress() {
        alert('Facebook button pressed')
    }
    onCreateAccountPress() {
        alert('CreateAccount button pressed')
    }
    onMoreOptionsPress() {
        alert('MoreOptions button pressed')
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image 
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
                    <RoundedButton 
                        text='Continue with Facebook'
                        colorp={colors.green01}
                        backgroundColorp={colors.white}
                        handlePress={this.onFacebookPress}
                        icon={<Icon name='facebook' size={20} style={styles.facebookButton} />}
                    />
                    <RoundedButton 
                        text='Create Account'
                        colorp={colors.white} // There is no backgroundColorp prop to make it transparant/green
                        handlePress={this.onCreateAccountPress} // There is no icon prop to make it doesn't show any icon
                    />
                    <TouchableOpacity 
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPress}
                    >
                        <Text style={styles.moreOptionsButtonText}>More options</Text>
                    </TouchableOpacity>
                    <Text style={styles.termsAndConditions}>
                        <Text>By tapping Continue, Create Account or More Options, I agree to Airbnb's </Text>
                        <Text style={styles.termsAndConditionsLink} onPress={() => {}}>Term of Services</Text>
                        <Text>, </Text>
                        <Text style={styles.termsAndConditionsLink} onPress={() => {}}>Payments Terms of Service</Text>
                        <Text>, </Text>
                        <Text style={styles.termsAndConditionsLink} onPress={() => {}}>Privacy Policy</Text>
                        <Text>, and </Text>
                        <Text style={styles.termsAndConditionsLink} onPress={() => {}}>Nondiscrimination Policy</Text>
                        <Text>.</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '300',
        color: colors.white,
        marginBottom: 30,
    },
    facebookButton: {
        position: 'relative',
        left: 20,
        zIndex: 99,
        color: colors.green01,
    },
    moreOptionsButton: {
        marginTop: 10,
    },
    moreOptionsButtonText: {
        fontSize: 16,
        color: colors.white,
    },
    termsAndConditions: {
        fontSize: 13,
        color: colors.white,
        lineHeight: 18,
        marginTop: 25,
    },
    termsAndConditionsLink: {
        fontWeight: '500',
        // fontStyle: 'italic',
        textDecorationLine: 'underline',
    }
})