import Posts from './homeSections/Posts';
import Welcome from './homeSections/Welcome';
import PostOrd from './postYnty/PostOrd';

const HomePage = () => {
	return (
		<>
			<Welcome />
			<PostOrd />
			<Posts />
		</>
	);
};

export default HomePage;
