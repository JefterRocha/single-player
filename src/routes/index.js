import React from 'react'
import { Dimensions } from 'react-native'
import {
	createStackNavigator,
	createDrawerNavigator,
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation'

import SplashScreen from '../screens/SplashScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import HomeScreen from '../screens/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen'
import SuportButton from '../components/SuportButton'
import PostListScreen from '../screens/PostListScreen'
import PostScreen from '../screens/PostScreen'
import SuportScreen from '../screens/SuportScreen'

import MenuDrawer from '../components/MenuDrawer'
import MenuButton from '../components/MenuButton'

const { width: deviceWidth } = Dimensions.get('window')

const drawerConfig = {
	drawerWidth: deviceWidth * 0.6,
	contentComponent: ({ navigation }) => {
		return <MenuDrawer navigation={navigation} />
	}
}

const headerStyle = {
	headerStyle: {
		backgroundColor: '#283c63'
	},
	headerTintColor: '#FFF',
	headerTitleStyle: {
		fontWeight: 'bold',
		textTransform: 'uppercase'
	}
}

const drawerStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Singleplayer',
				gesturesEnabled: false,
				headerLeft: <MenuButton navigation={navigation} />,
				headerRight: <SuportButton navigation={navigation} />,
				...headerStyle
			})
		},

		Category: {
			screen: CategoryScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Categoria',
				headerLeft: <MenuButton navigation={navigation} />,
				...headerStyle
			})
		},

		Suport: {
			screen: SuportScreen,
			navigationOptions: {
				title: 'Suporte',
				...headerStyle
			}
		},

		PostList: {
			screen: PostListScreen,
			navigationOptions: ({ navigation }) => ({
				title: navigation.getParam('category'),
				...headerStyle
			})
		},

		Post: {
			screen: PostScreen,
			navigationOptions: {
				title: 'Post',
				...headerStyle
			}
		}
	} /* ,
	{ headerMode: 'screen' } */
)

const drawerNavigator = createDrawerNavigator(
	{
		MainStack: { screen: drawerStack }
	},
	drawerConfig
)

const appStack = createSwitchNavigator(
	{
		Splash: SplashScreen,
		Welcome: {
			screen: WelcomeScreen,
			header: null
		},
		Drawer: {
			screen: drawerNavigator,
			navigationOptions: {
				header: null,
				gesturesEnabled: false
			}
		}
		/* Auth: AuthStack,
  		Main: MainStack */
	},
	{
		/* headerMode: 'none', */
		initialRouteName: 'Splash'
	}
)

export default createAppContainer(appStack)
