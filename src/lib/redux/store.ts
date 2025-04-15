import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer, { RootState as BaseRootState } from './rootReducer';

const persistConfig = {
	key: 'meme-catalog-store',
	storage,
	whitelist: ['memes'],
};

const ignoredActions = [
	'persist/PERSIST',
	'persist/REHYDRATE',
	'persist/REGISTER',
	'persist/FLUSH',
	'persist/PAUSE',
	'persist/PURGE',
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface RootState extends BaseRootState {}

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions,
			},
		}),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
