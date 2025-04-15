import { combineReducers } from '@reduxjs/toolkit';
import memesReducer from './slices/memesSlice';

// Combine all reducers into root reducer
const rootReducer = combineReducers({
	memes: memesReducer,
});

// Type for the complete Redux state
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
