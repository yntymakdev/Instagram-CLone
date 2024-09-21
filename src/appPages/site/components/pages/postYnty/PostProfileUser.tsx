'use client';
import { useRouter } from 'next/router';
import PostOrd from './PostOrd';

const PostProfileUser = () => {
	const router = useRouter();
	const { id } = router.query; // Извлекаем userId из параметров маршрута
	const userId = Array.isArray(id) ? id[0] : id; // Обработка случая, если id массив

	if (!userId || typeof userId !== 'string') return <div>Загрузка...</div>; // Проверка на тип

	return (
		<div>
			<h1>Профиль пользователя</h1>
			<PostOrd userId={userId} /> {/* Теперь userId — это строка */}
		</div>
	);
};

export default PostProfileUser;
