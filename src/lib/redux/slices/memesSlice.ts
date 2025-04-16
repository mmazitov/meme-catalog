import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMemes } from '../../api/memesApi';
import { AppDispatch, RootState } from '../store';

export interface Meme {
	id: string;
	title: string;
	imageUrl: string;
	likes: number;
}

interface MemesState {
	memes: Meme[];
	loading: boolean;
	error: string | null;
}

const initialState: MemesState = {
	memes: [],
	loading: false,
	error: null,
};

const memesSlice = createSlice({
	name: 'memes',
	initialState,
	reducers: {
		startLoading(state) {
			state.loading = true;
			state.error = null;
		},
		setMemes(state, action: PayloadAction<Meme[]>) {
			state.memes = action.payload;
			state.loading = false;
		},
		setError(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload || 'Failed to fetch memes';
		},
		updateMeme(state, action: PayloadAction<Meme>) {
			const updatedMeme = action.payload;
			state.memes = state.memes.map((meme) =>
				meme.id === updatedMeme.id ? updatedMeme : meme,
			);
		},
	},
});

export const { startLoading, setMemes, setError, updateMeme } =
	memesSlice.actions;

export const fetchMemesThunk = () => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		const state = getState();

		// If we already have memes in store, do nothing
		if (state.memes.memes.length > 0) {
			return;
		}

		try {
			dispatch(startLoading());
			const memes = await fetchMemes();
			dispatch(setMemes(memes));
		} catch (error: any) {
			dispatch(setError(error.message));
		}
	};
};

export default memesSlice.reducer;
