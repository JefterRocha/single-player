import { Dimensions, StyleSheet } from 'react-native'

const { width: deviceWidth } = Dimensions.get('window')

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#556691'
	},
	flatContent: {
		paddingHorizontal: 10,
		width: deviceWidth
	},
	redirect: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#283c63',
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderColor: '#b7b7b7',
		borderTopLeftRadius: 2,
		borderTopRightRadius: 2,
		marginVertical: 10,
		paddingHorizontal: 10
	},
	postLink: {
		alignItems: 'center',
		paddingVertical: 15
	},
	postLinkTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#FFF',
		opacity: 0.8,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderColor: 'rgb(164, 164, 164)',
		textTransform: 'uppercase'
	},
	postLinkDescription: {
		fontSize: 16,
		fontWeight: '300',
		color: '#FFF',
		opacity: 0.7,
		textAlign: 'justify',
		marginTop: 15
	},
	postLinkFooter: {
		width: deviceWidth * 0.85,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15
	},
	postLinkInfo: {
		textTransform: 'uppercase',
		fontSize: 11,
		fontWeight: '900',
		color: '#FFF',
		opacity: 0.7
	},
	refresh: {
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.2)',
		alignItems: 'center',
		justifyContent: 'center',
		width: 70,
		position: 'absolute',
		bottom: 10,
		right: 10,
		height: 70,
		backgroundColor: '#ff7a04',
		borderRadius: 100
	},
	overlay: {
		flex: 1,
		position: 'absolute',
		left: 0,
		top: 0,
		opacity: 0.8,
		backgroundColor: 'black'
	}
})
