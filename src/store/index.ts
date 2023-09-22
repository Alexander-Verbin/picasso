import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api/postsApi';

export const store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
	},
	middleware: (getDefaultMIddleware) =>
		getDefaultMIddleware().concat(postsApi.middleware),
});
