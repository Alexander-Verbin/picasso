import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiResponse, apiResponsePostItem } from '../../types';

export const postsApi = createApi({
	reducerPath: 'posts/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: (build) => ({
		getPosts: build.query<apiResponse<apiResponsePostItem>, void>({
			query: () => ({
				url: 'posts',
			}),
		}),
	}),
});

export const { useGetPostsQuery } = postsApi;
