import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialMemes } from '../../data/memeData';

export interface Meme {
	id: string;
	title: string;
	imageUrl: string;
	likes: number;
}

interface MemesState {
	memes: Meme[];
}

const initialState: MemesState = {
	memes:
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('memes') || 'null') || initialMemes
			: initialMemes,
};

const memesSlice = createSlice({
	name: 'memes',
	initialState,
	reducers: {
		loadMemes(state) {
			state.memes =
				typeof window !== 'undefined'
					? JSON.parse(localStorage.getItem('memes') || 'null') || initialMemes
					: initialMemes;
		},
		saveMemes(state) {
			if (typeof window !== 'undefined') {
				localStorage.setItem('memes', JSON.stringify(state.memes));
			}
		},
		updateMeme(state, action: PayloadAction<Meme>) {
			const updatedMeme = action.payload;
			state.memes = state.memes.map((meme) =>
				meme.id === updatedMeme.id ? updatedMeme : meme,
			);
			if (typeof window !== 'undefined') {
				localStorage.setItem('memes', JSON.stringify(state.memes));
			}
		},
	},
});

export const { loadMemes, saveMemes, updateMeme } = memesSlice.actions;

export default memesSlice.reducer;
