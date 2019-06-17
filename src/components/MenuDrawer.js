import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../styles/drawerStyle'

export default ({ navigation }) => {
	const navLink = (nav, text) => {
		return (
			<TouchableOpacity
				style={{ height: 50 }}
				onPress={() => navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}

	return (
		<View style={styles.container}>
			<View style={styles.topLinks}>
				<View style={styles.logoWrapper}>
					<Text style={styles.logo}>S</Text>
					<Text style={styles.logo}>P</Text>
				</View>
			</View>
			<ScrollView style={styles.scroller}>
				<View style={styles.bottomLinks}>
					{navLink('Home', 'Home')}
					{navLink('Category', 'Categorias')}
					{navLink('Suport', 'Suporte')}
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<Text style={styles.description}>Singleplayer</Text>
				<Text style={styles.version}>v1.0.0</Text>
			</View>
		</View>
	)
}
