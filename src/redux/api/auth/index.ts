import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query<AUTH.GetResponse, AUTH.GetRequest>({
			query: () => ({
				url: '/user',
				method: 'GET'
			}),
			providesTags: ['auth']
		})
	})
});
export const { useGetMeQuery } = api;
