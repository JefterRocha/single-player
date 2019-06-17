import React, { Component } from 'react'
import {
	Dimensions,
	Alert,
	View,
	FlatList,
	TouchableOpacity,
	Text,
	ActivityIndicator,
	RefreshControl
} from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import storage from '../services/storage'

import styles from '../styles/postComponentStyle'
import fetchData from '../services/fetchData'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

export default class ListComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			refreshing: false,
			deviceHeight: 0
		}
		this.handleRefresh = this.handleRefresh.bind(this)
	}

	async getPosts() {
		const netInfo = await NetInfo.getConnectionInfo()
		const netInfoType = await netInfo.type

		const { itemCategory } = this.props

		if (netInfoType == 'none' || netInfoType == 'unknown') {
			const connectionAlert = await storage.getData('@connectionAlert')
			if (!JSON.parse(connectionAlert).wasDisplayed) {
				Alert.alert(
					'Falha na conexão',
					'Seu dispositivo não está conectado a internet.'
				)
				await storage.storeData(
					'@connectionAlert',
					JSON.stringify({ wasDisplayed: true })
				)
			}
			const storagedPosts = await storage.getData('@storagedPosts')
			if (itemCategory) {
				const posts = JSON.parse(storagedPosts)
					.filter(post => post.category === itemCategory)
					.slice(0, 30)
				this.setState({ posts })
			}
			else {
				const posts = JSON.parse(storagedPosts).slice(0, 30)
				this.setState({ posts })
			}
		}
		else {
			const postsList = await fetchData()
			await storage.storeData('@storagedPosts', JSON.stringify(postsList))
			await storage.storeData(
				'@connectionAlert',
				JSON.stringify({ wasDisplayed: false })
			)

			if (itemCategory) {
				const posts = postsList.filter(
					post => post.category === itemCategory
				)
				this.setState({ posts })
			}
			else {
				this.setState({ posts: postsList })
			}
		}
	}

	handleRefresh() {
		this.setState({ refreshing: true, deviceHeight: deviceHeight })
		this.getPosts().then(() => {
			this.setState({ refreshing: false, deviceHeight: 0 })
		})
	}

	formattedDate(date) {
		const months = 'janfevmarabrmaijunjulagosetoutnovdez'.match(/.{3}/g),
			day = date.getDate().toString().padStart(2, '0'),
			year = date.getFullYear()
		return [ day, months[date.getMonth()], year ].join(' de ')
	}

	componentDidMount() {
		this.getPosts()
	}

	render() {
		const { posts } = this.state,
			{ navigation } = this.props
		return (
			<View style={styles.container}>
				{posts.length ? (
					<FlatList
						contentContainerStyle={styles.flatContent}
						data={posts}
						showsVerticalScrollIndicator={true}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.redirect}
								onPress={() =>
									navigation.navigate('Post', {
										id: item._id
									})}>
								<View style={styles.postLink}>
									<Text style={styles.postLinkTitle}>
										{item.title}
									</Text>
									<Text style={styles.postLinkDescription}>
										{item.description}
									</Text>
									<View style={styles.postLinkFooter}>
										<Text style={styles.postLinkInfo}>
											{this.formattedDate(
												new Date(item.date)
											)}
										</Text>

										<Text style={styles.postLinkInfo}>
											{item.type}
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={item => item._id}
						refreshControl={
							<RefreshControl
								refreshing={this.state.refreshing}
								onRefresh={this.handleRefresh}
							/>
						}
					/>
				) : (
					<ActivityIndicator size={100} color='#ff7a04' />
				)}
				<View
					style={[
						styles.overlay,
						{ width: deviceWidth, height: this.state.deviceHeight }
					]}
				/>
			</View>
		)
	}
}
