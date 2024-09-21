// components/PostOrd.tsx
'use client';

import { usePostOtherQuery } from '@/redux/api/posts';

interface PostOrdProps {
	userId: string; // Указываем, что userId — это строка
}

const PostOrd = ({ userId }: PostOrdProps) => {
	// Запрос постов по ID другого пользователя
	const { data, error, isLoading } = usePostOtherQuery(userId);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error fetching posts: {error.message}</div>;

	return (
		<div>
			<h1>Posts from another user</h1>
			{data && data.length > 0 ? (
				data.map((post) => (
					<div key={post.id}>
						<img src={post.mediaUrl} alt="Post" />
						<h5>{post.caption}</h5>
					</div>
				))
			) : (
				<div>No posts found.</div>
			)}
		</div>
	);
};

export default PostOrd;
