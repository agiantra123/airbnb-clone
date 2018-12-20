:exclamation: these gif(s) and dummy data make size of repository bigger. I'm sorry.

## Logged In Bottom Tab Navigator (https://youtu.be/ke1whnT5Cv8)

### Libraries:
1. react-navigation
2. react-native-vector-icons

### Tips:
1. Containers (as many as tabs) -> Logged In Tab Navigator (only 1) -> Logged In Screen (only 1)
2. To configure label and icon of the tab, add static navigationOptions to all containers
3. The navigation.js in styles folder is used to configure (remove) header/bar (transparentHeaderStyle)

<img src="/images/001.gif" alt="001 Tab Navigator" title="001 Tab Navigator" width="324" height="576" />

## Turn On Notification Screens (https://youtu.be/VSZmzpVnTrs)

### Libraries:

### Tips:
1. The navigation.js in styles folder is used to configure (remove) header/bar (transparentHeaderStyle)
2. The underlayColor prop of TouchableHighlight will appear if there is onPress prop

<img src="/images/002.gif" alt="002 Turn On Notifications Screen" title="002 Turn On Notifications Screen" width="324" height="576" />

## Explore Container/Tab 1 (https://youtu.be/bMVYVk_UhI8)

### Libraries:

### Tips:
1. In Android, use elevation prop to show shadow instead of shadow (iOs only)
2. To define color, you can use rgb(,,) or rgba(,,,)
3. Folder data is used to save ALL dummy data (json, photos, etc)
4. These codes are same
No functional component
```jsx
render() {
    return (
        ...
        <TouchableHighlight style={[styles.card, {marginLeft: 20}]}>
            <Image source={require('../../data/photos/homesCategory.png')}  style={styles.image} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.card}>
            <Image source={require('../../data/photos/experiencesCategory.png')}  style={styles.image} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.card}>
            <Image source={require('../../data/photos/restaurantsCategory.png')}  style={styles.image} />
        </TouchableHighlight>
        ...
    )
}
```

With functional component
```jsx
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
        ...
        {this.categoriesList()}
        ...
    )
}
```

<img src="/images/003.gif" alt="003 Explore Tab 1" title="003 Explore Tab 1" width="324" height="576" />

## Explore Container/Tab 2 (https://youtu.be/qJgPT_kJzog)

### Libraries:

### Tips:
1. To render multiple items containing data array, you can use a function with array mapping. See the code below
```jsx
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
```
2. The contentContainerStyle prop is used to give style to the scrollview contents

<img src="/images/004.gif" alt="004 Explore Tab 2" title="004 Explore Tab 2" width="324" height="576" />