interface ImgflipMeme {
	id: string;
	name: string;
	url: string;
	width: number;
	height: number;
	box_count: number;
}

interface ImgflipResponse {
	success: boolean;
	data: {
		memes: ImgflipMeme[];
	};
}

export const fetchMemes = async () => {
	try {
		const response = await fetch('https://api.imgflip.com/get_memes');
		const data: ImgflipResponse = await response.json();

		if (!data.success) {
			throw new Error('Failed to fetch memes');
		}

		// Get 10 random memes from the response
		const randomMemes = data.data.memes
			.sort(() => 0.5 - Math.random())
			.slice(0, 10)
			.map((meme) => ({
				id: meme.id,
				title: meme.name,
				imageUrl: meme.url,
				likes: Math.floor(Math.random() * 99),
			}));

		return randomMemes;
	} catch (error) {
		console.error('Error fetching memes:', error);
		throw error;
	}
};
