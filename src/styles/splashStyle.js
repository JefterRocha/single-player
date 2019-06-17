import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#293d64',
		padding: 10
	},
	logoWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		paddingHorizontal: 20,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#707070'
	},
	logo: {
		color: '#ff7a04',
		fontSize: 100,
		fontWeight: 'bold'
	}
})
