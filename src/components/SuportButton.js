import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default ({ navigation }) => {
	return (
		<TouchableOpacity
			style={{ marginRight: 20 }}
			onPress={() => navigation.navigate('Suport')}>
			<Icon name='help' color='#ff7a04' size={42} />
		</TouchableOpacity>
	)
}
