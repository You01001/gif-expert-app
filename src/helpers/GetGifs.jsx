export const getGifs = async (category) => {

	const limit = 10;
	const key = 'OkEIexpVhutNAuLMczziylo0rxucJkt2';

	const url = `https://api.giphy.com/v1/gifs/search?&q=${encodeURI(category)}&limit=${limit}&api_key=${key}`
	const resp = await fetch(url);
	const {data} = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url

		}
	})
	return gifs;
}