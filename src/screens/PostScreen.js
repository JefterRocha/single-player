import React, { Component } from 'react'
import { ScrollView, View, Text, ActivityIndicator } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import storage from '../services/storage'
import fetchData from '../services/fetchData'
import styles from '../styles/postStyle'

export default class PostScreen extends Component {
	state = {
		post: []
	}

	async componentDidMount() {
		const { navigation } = this.props
		const postId = navigation.getParam('id')

		const netInfo = await NetInfo.getConnectionInfo()
		const netInfoType = await netInfo.type

		if (netInfoType == 'none' || netInfoType == 'unknown') {
			const storagedPosts = await storage.getData('@storagedPosts')
			const post = [
				JSON.parse(storagedPosts).find(post => post._id == postId)
			]
			this.setState({ post })
		}
		else {
			const post = await fetchData(postId, { method: 'GET' })
			this.setState({ post })
		}
	}
	render() {
		const [ post ] = this.state.post
		const postComponent = post ? (
			<ScrollView style={styles.scrollableContent}>
				<Text style={styles.postTitle}>{post.title}</Text>
				<Text style={styles.postDescription}>{post.description}</Text>
				<Text style={styles.postBody}>{post.body}</Text>
			</ScrollView>
		) : (
			<ActivityIndicator size={100} color='#ff7a04' />
		)

		return <View style={styles.container}>{postComponent}</View>
	}
}
