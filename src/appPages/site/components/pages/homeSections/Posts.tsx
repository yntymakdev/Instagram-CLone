'use client';

import { useGetPostsQuery } from '@/redux/api/posts';

const Posts = () => {
	// const { data: responseData = [] } = useGetPostsQuery();
	const { data } = useGetPostsQuery();
	console.log(data);

	return (
		<div>
			<div className="section"></div>
			<div className="container"></div>
			<div className="sec">
				<h1>header</h1>

				{data?.map((el) => (
					<div key={el.id}>
						<img src={el.mediaUrl} alt="photo" />
						<h5>{el.caption}</h5>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
