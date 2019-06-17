import React from 'react'
import { View, StatusBar } from 'react-native'
import Routes from './routes'

export default () => (
	<View style={{ flex: 1 }}>
		<StatusBar backgroundColor='#001739' />
		<Routes />
	</View>
)
