const URI = 'https://singleplayer-api.herokuapp.com/posts'

export default async (id = '', params = { method: 'GET' }) => {
	try {
		const response = await fetch(`${URI}/${id}`, {
			headers: new Headers({ 'Content-Type': 'application/json' }),
			...params
		})
		const responseJsonData = await response.json()
		return responseJsonData
	} catch (e) {
		console.log(e)
	}
}
