import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#556691'
	},
	scrollableContent: {
		paddingHorizontal: 10
	},
	postTitle: {
		fontSize: 25,
		fontWeight: '900',
		textAlign: 'center',
		color: '#FFF',
		opacity: 0.57,
		marginVertical: 10
	},
	postDescription: {
		fontSize: 18,
		fontWeight: '900',
		textAlign: 'justify',
		color: '#FFF',
		opacity: 0.84,
		lineHeight: 20,
		marginBottom: 10
	},
	postBody: {
		fontSize: 16,
		fontWeight: '300',
		color: '#FFF',
		opacity: 0.84,
		lineHeight: 20,
		marginBottom: 10
	}
})
