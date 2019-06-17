import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import styles from '../styles/suportStyle'

export default () => (
	<ScrollView>
		<View style={styles.container}>
			<Text style={styles.title}>Equipe</Text>
			<View style={styles.subTopic}>
				<Text style={styles.subTitle}>Desenvolvimento</Text>
				<Text style={styles.member}>Jefter de A. Rocha</Text>
				<Text style={styles.member}>Wesley A. Farias</Text>
			</View>
			<View style={styles.subTopic}>
				<Text style={styles.subTitle}>Conteúdo</Text>
				<Text style={styles.member}>Rafael Cruz</Text>
				<Text style={styles.member}>Wesley A. Farias</Text>
			</View>
			<View style={styles.subTopic}>
				<Text style={styles.subTitle}>Design</Text>
				<Text style={styles.member}>Joelson L. de Sousa</Text>
				<Text style={styles.member}>Thalyson F. S. Nascimento</Text>
			</View>
			<View style={styles.contact}>
				<Text style={styles.contactLabel}>Contato:</Text>
				<Text style={styles.contactAddress}>
					singleplayerapp@gmail.com
				</Text>
			</View>
		</View>
	</ScrollView>
)
