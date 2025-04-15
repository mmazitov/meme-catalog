import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialMemes } from '../../data/memeData';

// Interface defining the structure of a meme
export interface Meme {
	id: string;
	title: string;
	imageUrl: string;
	likes: number;
}

// Interface for the memes state slice
interface MemesState {
	memes: Meme[];
}

// Initial state with fallback to predefined memes if localStorage is empty
const initialState: MemesState = {
	memes:
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('memes') || 'null') || initialMemes
			: initialMemes,
};

// Redux slice for managing memes state
const memesSlice = createSlice({
	name: 'memes',
	initialState,
	reducers: {
		// Load memes from localStorage or fallback to initial data
		loadMemes(state) {
			state.memes =
				typeof window !== 'undefined'
					? JSON.parse(localStorage.getItem('memes') || 'null') || initialMemes
					: initialMemes;
		},
		// Save current memes state to localStorage
		saveMemes(state) {
			if (typeof window !== 'undefined') {
				localStorage.setItem('memes', JSON.stringify(state.memes));
			}
		},
		// Update a specific meme and persist changes
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

// Export actions and reducer for the memes slice
export const { loadMemes, saveMemes, updateMeme } = memesSlice.actions;

export default memesSlice.reducer;
