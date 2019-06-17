import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#293d64',
		padding: 10
	},
	greetingsWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#707070',
		marginBottom: 40,
		paddingVertical: 10,
		paddingHorizontal: 25
	},
	greetings: {
		fontSize: 40,
		fontWeight: '900',
		fontStyle: 'normal',
		textAlign: 'center',
		color: '#ffffff'
	},
	startTouch: {
		backgroundColor: '#ff7a04',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#707070',
		paddingVertical: 2,
		paddingHorizontal: 20
	},
	startText: {
		lineHeight: 45,
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'center',
		color: '#eeebeb'
	}
})
