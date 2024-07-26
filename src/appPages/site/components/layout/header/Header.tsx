import React, { FC } from 'react';
import scss from './Header.module.scss';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { useGetMeQuery, useLogoutMutation } from '@/redux/api/auth';

const links = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'About',
		href: '/about'
	}
];

const Header: FC = () => {
	const { data } = useGetMeQuery();
	const [logoutMutation] = useLogoutMutation();

	const logout = async () => {
		await logoutMutation();
		localStorage.removeItem('tokens');
		window.location.reload();
	};

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<div className={scss.logo}>
							<Image src={logo} alt="logo" />
						</div>
						<nav className={scss.nav}>
							<ul>
								{links.map((item, index) => (
									<li key={index}>
										<Link className={scss.link} href={item.href}>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className={scss.right}>
						<div className={scss.auth}>
							{data ? (
								<>
									<h1>{data.profile.email}</h1>
									<button onClick={logout}>Выход</button>
								</>
							) : (
								<>
									<Link href="/auth/sign-in">Вход</Link>
									<Link href="/auth/sign-up">Регистрация</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
