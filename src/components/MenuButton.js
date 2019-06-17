import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default ({ navigation }) => {
	return (
		<TouchableOpacity
			style={{ marginLeft: 20 }}
			onPress={() => navigation.toggleDrawer()}>
			<Icon name='menu' color='#ff7a04' size={42} />
		</TouchableOpacity>
	)
}
