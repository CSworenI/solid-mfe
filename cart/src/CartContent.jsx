import { createEffect, createSignal } from 'solid-js';

import { jwt } from './cart';
import { Login } from './Login';
import { MiniCart } from './MiniCart';

const CartContent = () => {
	const [token, setToken] = createSignal(null);

	createEffect(async () => {
		return jwt.subscribe((val) => setToken(val ?? ''));
	});

	return (
		<>
			<div>
				<Login />
				<MiniCart />
			</div>
		</>
	);
};

export default CartContent;
