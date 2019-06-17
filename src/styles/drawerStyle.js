import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f6'
	},
	topLinks: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff7a04'
	},
	logoWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		color: '#283c63',
		fontSize: 50,
		fontWeight: 'bold'
	},
	scroller: {
		flex: 1
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450
	},

	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left'
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1,
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1,
		marginLeft: 20,
		fontSize: 16
	}
})
