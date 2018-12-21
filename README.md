:exclamation: These gif(s) and dummy data make size of repository bigger. I'm sorry.

## Logged In Bottom Tab Navigator (https://youtu.be/ke1whnT5Cv8)

### Libraries:
1. react-navigation
2. react-native-vector-icons

### Tips:
1. Containers (as many as tabs) -> Logged In Tab Navigator (only 1) -> Logged In Screen (only 1)
2. To configure label and icon of the tab, add static navigationOptions to all containers
3. The navigation.js in styles folder is used to configure (remove) header/bar (transparentHeaderStyle)

<table>
  <tr>
    <td><img src="/images/001.gif" alt="001 Tab Navigator" title="001 Tab Navigator" width="324" height="576" /></td>
  </tr>
</table>

## Turn On Notification Screens (https://youtu.be/VSZmzpVnTrs)

### Libraries:

### Tips:
1. The navigation.js in styles folder is used to configure (remove) header/bar (transparentHeaderStyle)
2. The underlayColor prop of TouchableHighlight will appear if there is onPress prop

<table>
  <tr>
    <td><img src="/images/002.gif" alt="002 Turn On Notifications Screen" title="002 Turn On Notifications Screen" width="324" height="576" /></td>
  </tr>
</table>

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

<table>
  <tr>
    <td><img src="/images/003.gif" alt="003 Explore Tab 1" title="003 Explore Tab 1" width="324" height="576" /></td>
  </tr>
</table>

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

<table>
  <tr>
    <td><img src="/images/004.gif" alt="004 Explore Tab 2" title="004 Explore Tab 2" width="324" height="576" /></td>
  </tr>
</table>

## Star Rating & Favorite Component (https://youtu.be/IVRQEbG5ZTk)

### Libraries:

### Tips:
1. To create icon or image or text on an image, we can style it with absolute position
2. To make an filled icon with different-color border, please create two icons in a view. One of them has absolute position
3. GOOD CONCEPT: returning an array of component will create those components as many as array length
4. Three common <Text> styles: fontSize, fontWeight, and color

<table>
  <tr>
    <td><img src="/images/005a.png" alt="005a Star Rating & Favorite Component" title="005a Star Rating & Favorite Component" width="324" height="576" /></td>
    <td><img src="/images/005b.png" alt="005b Star Rating & Favorite Component" title="005b Star Rating & Favorite Component" width="324" height="576" /></td>
  </tr>
</table>

## No Saved Listings (https://youtu.be/_hi6qp9sJQY)

### Libraries:

### Tips:
1. A good idea to wrap views with ScrollView insead of View

### Minutes about Redux or Navigation:

<table>
  <tr>
    <td><img src="/images/006a.png" alt="006a No Saved Listings" title="006a No Saved Listings" width="324" height="576" /></td>
    <td><img src="/images/006b.gif" alt="006b No Saved Listings" title="006b No Saved Listings" width="324" height="576" /></td>
  </tr>
</table>

## Create a List 1 (https://youtu.be/qJFKhhKeogY)

### Libraries:

### Tips:
1. Colors choosing makes design more attractive

### Minutes about Redux or Navigation:
- 2:00-5:20 (Add createStackNavigator)
- 10:50-12-40 (Add handleAddToFav function to move to other screen)
- 13:00-13:30 & 15:40-15:50 (Remove header/app bar of Explore Tab)
- 16:30-17:45 (Remove tab bar of CreateList)
- 17:50-23:40 (Style header and back/close button)

<table>
  <tr>
    <td><img src="/images/007.png" alt="007 Create a List 1" title="007 Create a List 1" width="324" height="576" /></td>
  </tr>
</table>