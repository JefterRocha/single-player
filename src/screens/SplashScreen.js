import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/splashStyle'
import storage from '../services/storage'

export default class SplashScreen extends Component {
	async checkAcess() {
		const alreadySeen = await storage.getData('@alreadySeen')
		if (alreadySeen) {
			this.props.navigation.navigate('Home')
			return
		}
		else {
			await storage.storeData('@alreadySeen', 'true')
			this.props.navigation.navigate('Welcome')
			return
		}
	}
	componentDidMount() {
		this.checkAcess()
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoWrapper}>
					<Text style={styles.logo}>S</Text>
					<Text style={styles.logo}>P</Text>
				</View>
			</View>
		)
	}
}
