import React, { Component } from 'react'
import { TouchableHighlight, Image, StyleSheet, ScrollView } from 'react-native'

export default class Categories extends Component {
    categoriesList() {
        const { categories } = this.props
        return categories.map((category, index) => {
            return (
                <TouchableHighlight key={index} 
                    style={index == 0 ? [styles.card, {marginLeft: 20}] : styles.card}
                >
                    <Image source={category.photo}  style={styles.image} />
                </TouchableHighlight>
            )
        })
    }
    render() {
        return (
            <ScrollView // remember thah scrolllist renders all childs
                pagingEnabled={false} // make it like a page
                horizontal={true}
                contentContainerStyle={styles.wrapper} // style for all items of content
                showsHorizontalScrollIndicator={false}
            >
                {this.categoriesList()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: 110,
        height: 110,
        marginRight: 8,
        marginLeft: 8,
    },
    image: {
        flex: 1, // flex must be defined. So, you can use property width and height with undefined value
        width: undefined,
        height: undefined,
    }
})