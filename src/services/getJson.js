const endpoints = {
	products: 'src/assets/products.json',
}
export const getJson = (dataHandler, name) =>
	window
		.fetch(endpoints[name])
		.then((response) => response.json())
		.then((data) => dataHandler(data))
		.catch((error) => console.error('Error:', error))


