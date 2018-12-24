/**
 * 1. Tab Navigator for all containers ('screens')
 * 2. This LoggedInTabNavigator will be used in LoggedIn screen. So, containers are in a Tab Navigator & Tab Navigator is in a screen
 */

import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import colors from '../styles/colors'
import ExploreContainer from '../containers/ExploreContainer'
import InboxContainer from '../containers/InboxContainer'
import ProfileContainer from '../containers/ProfileContainer'
import SavedContainer from '../containers/SavedContainer'
import TripsContainer from '../containers/TripsContainer'

const LoggedInTabNavigator = createBottomTabNavigator({
    ExploreContainer: { screen: ExploreContainer },
    SavedContainer: { screen: SavedContainer },
    TripsContainer: { screen: TripsContainer },
    InboxContainer: { screen: InboxContainer },
    ProfileContainer: { screen: ProfileContainer },
}, {
    tabBarOptions: {
        labelStyle: {
            // fontSize: 10,
            fontWeight: '600', // must be '...'
            marginBottom: 4,
        },
        tabStyle: {
            // marginBottom: 4,
        },
        activeTintColor: colors.pink,
    }
})

const AppContainer = createAppContainer(LoggedInTabNavigator) // I add this to make it works (no error)

export default AppContainer