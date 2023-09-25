import { createSignal } from 'solid-js';

import { login, useLoggedIn } from './cart';

export const Login = () => {
	const loggedIn = useLoggedIn(),
		[showLogin, setShowLogin] = createSignal(false),
		[user, setUser] = createSignal('sally'),
		[pw, setPw] = createSignal('123');

	return (
		<>
			{!loggedIn() && (
				<span onClick={() => setShowLogin(!showLogin())} id='showlogin_span'>
					<i className='ri-fingerprint-line text-2xl' id='showlogin'></i>
				</span>
			)}
			{showLogin() && (
				<div
					className='absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black'
					style={{
						width: 300,
						top: '2rem',
						left: -250
					}}>
					<input
						type='text'
						placeholder='User Name'
						value={user()}
						onChange={(evt) => setUser(evt.target.value)}
						className='border text-sm border-gray-400 p-2 rounded-md w-full'
					/>
					<input
						type='password'
						value={pw()}
						onChange={(evt) => setPw(evt.target.value)}
						className='border text-sm border-gray-400 p-2 rounded-md w-full mt-3'
					/>
					<button
						className='bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5'
						onClick={() => {
							login(user(), pw());
							setShowLogin(!useLoggedIn);
						}}
						id='loginbtn'>
						Login
					</button>
				</div>
			)}
		</>
	);
};
