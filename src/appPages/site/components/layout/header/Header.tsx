import React, { FC } from 'react';
import scss from './Header.module.scss';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { useGetMeQuery, useLogoutMutation } from '@/redux/api/auth';

// const links = [
// 	{
// 		element: (
// 			<>
// 				<div className="header">
// 					<button className={scss.home_mar}>Home</button>
// 				</div>
// 			</>
// 		),
// 		href: '/'
// 	},
// 	{
// 		element: (
// 			<>
// 				<div className="header">
// 					<button className={scss.home_mar}>About</button>
// 				</div>
// 			</>
// 		),
// 		href: '/about'
// 	},
// 	{
// 		element: (
// 			<>
// 				<div className="header">
// 					<button className={scss.home_mar}>Profile</button>
// 				</div>
// 			</>
// 		),
// 		href: '/my-profile'
// 	}
// ];

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
						<nav className={scss.head}>
							<Link href={'/'}>
								<h1>Home</h1>
							</Link>
							<Link href={'/about'}>
								<h1>About</h1>
							</Link>
							<Link href={'/my-profile'}>
								<h1>Profile</h1>
							</Link>
							{/* {links.map((item, index) => (
								<div key={index}>
									<Link className={scss.link} href={item.href}>
										{item.element}
									</Link>
								</div>
							))} */}
						</nav>
					</div>
					<div className={scss.right}>
						<div className={scss.auth}>
							{data ? (
								<>
									<h1>{data.profile.email}</h1>
									<Image
										width={40}
										height={40}
										src={data?.profile.photo}
										alt="photo"
									/>
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
