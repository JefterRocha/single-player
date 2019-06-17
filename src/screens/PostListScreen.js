import React, { Component } from 'react'
import ListComponent from '../components/ListComponent'

export default class PostListScreen extends Component {
	state = {
		itemCategory: false
	}

	async componentDidMount() {
		const { navigation } = this.props
		const itemCategory = navigation.getParam('category')
		this.setState({ itemCategory })
	}

	render() {
		return (
			<ListComponent
				navigation={this.props.navigation}
				itemCategory={this.state.itemCategory}
			/>
		)
	}
}
