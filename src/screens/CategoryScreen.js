import React from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import styles from '../styles/categoryStyle'
import FoodComponent from '../assets/Food'
import CleaningComponent from '../assets/Cleaning'
import OrganizationComponent from '../assets/Organization'

export default ({ navigation }) => (
	<ScrollView style={styles.scrollableContainer}>
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.typeContent}
				onPress={() =>
					navigation.navigate('PostList', {
						category: 'limpeza'
					})}>
				<CleaningComponent size={styles.images} />
				<Text style={styles.label}>Limpeza</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContent}
				onPress={() =>
					navigation.navigate('PostList', {
						category: 'culinária'
					})}>
				<FoodComponent size={styles.images} />
				<Text style={styles.label}>Culinária</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContent}
				onPress={() =>
					navigation.navigate('PostList', {
						category: 'organização'
					})}>
				<OrganizationComponent size={styles.images} />
				<Text style={styles.label}>Organização</Text>
			</TouchableOpacity>
		</View>
	</ScrollView>
)
