import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getPosts: build.query<POSTS.GetPostsResponse, POSTS.GetPostsRequest>({
			query: () => ({
				url: '/post/get-all',
				method: 'GET'
			}),
			providesTags: ['posts']
		}),
		postOther: build.query<
			PostOther.PostOtherResponse,
			PostOther.PostOtherRequest
		>({
			query: (postData) => ({
				url: '/post/get-other/${userId}',
				method: 'GET',
				body: postData,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('tokens')}` // вставляем токен
				}
			}),
			providesTags: ['posts']
		})
	})
});

export const { useGetPostsQuery, usePostOtherQuery } = api;
