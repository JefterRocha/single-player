import AsyncStorage from '@react-native-community/async-storage'

export default {
	storeData: async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value)
		} catch (e) {
			alert(`Some error occured: ${e}`)
		}
	},

	getData: async key => {
		try {
			const value = await AsyncStorage.getItem(key)
			return value
		} catch (e) {
			alert(`Some error occured: ${e}`)
		}
	}
}
