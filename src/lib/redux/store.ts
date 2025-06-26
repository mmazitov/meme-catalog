import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer, { RootState as BaseRootState } from './rootReducer';

// Configuration for redux-persist
const persistConfig = {
	key: 'meme-catalog-store', // Storage key
	storage, // Use localStorage as storage
	whitelist: ['memes'], // Only persist memes slice
};

// Actions that should be ignored by serializableCheck middleware
const ignoredActions = [
	'persist/PERSIST',
	'persist/REHYDRATE',
	'persist/REGISTER',
	'persist/FLUSH',
	'persist/PAUSE',
	'persist/PURGE',
];

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface RootState extends BaseRootState {}

// Configure store with persisted reducer and middleware
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions,
			},
		}),
});

// Export store and types
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
