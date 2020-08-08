const postData = async (url: string, data: object) => {
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
}
postData.text = async (url: string, data: object) => {
	return (await postData(url, data)).text()
}
postData.json = async (url: string, data: object) => {
	return (await postData(url, data)).json()
}
export default postData