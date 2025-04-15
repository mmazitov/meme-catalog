import { combineReducers } from '@reduxjs/toolkit';
import memesReducer from './slices/memesSlice';

const rootReducer = combineReducers({
	memes: memesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
