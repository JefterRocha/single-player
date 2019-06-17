import { StyleSheet, Dimensions } from 'react-native'
const size = Dimensions.get('window').width * 0.3
export default StyleSheet.create({
	scrollableContainer: {
		flex: 1,
		backgroundColor: '#556691',
		paddingHorizontal: 10,
		width: '100%',
		height: '100%'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 20
	},
	typeContent: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#283c63',
		borderRadius: 10,
		width: size * 2.5,
		padding: 20,
		marginBottom: 20
	},
	label: {
		fontSize: 28,
		color: '#FFF',
		marginBottom: 5,
		fontWeight: '500',
		textTransform: 'uppercase'
	},
	images: size
})
