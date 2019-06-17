import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../styles/welcomeStyle'

export default class WelcomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.greetingsWrapper}>
					<Text style={styles.greetings}>BEM VINDO!</Text>
				</View>
				<TouchableOpacity
					style={styles.startTouch}
					onPress={() => this.props.navigation.navigate('Home')}>
					<Text style={styles.startText}>INICIAR</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
