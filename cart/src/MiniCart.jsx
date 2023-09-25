import { For, createEffect, createSignal } from 'solid-js';

import { cart, emptyCart } from './cart';
import { currency } from 'home/products';

export const MiniCart = () => {
	const [items, setItems] = createSignal(undefined),
		[showCart, setShowCart] = createSignal(false);

	createEffect(async () => {
		setItems(cart.value?.cartItems);
		return cart.subscribe((c) => setItems(c?.cartItems));
	});

	return (
		<>
			<div>
				{items() && items().length > 0 && (
					<span onClick={() => setShowCart(!showCart())} id='showcart_span'>
						<i className='ri-shopping-cart-2-fill text-2xl' id='showcart'></i>
						{items().length}
					</span>
				)}
				{showCart() && (
					<div
						className='absolute p-3 border-4 border-blue-800 bg-white rounded-xl text-center'
						style={{ width: '300px', top: '2rem', left: -250 }}>
						<For each={items()}>
							{(item) => (
								<div className='grid grid-cols-6 gap-3 text-sm justify-center p-2'>
									<div>{item.quantity}</div>
									<img className='max-h-20' src={item.image} alt={item.name} />
									<div className='cols-span-2'>{item.name}</div>
									<div></div>
									<div className='text-right'>
										{currency.format(item.quantity * item.price)}
									</div>
								</div>
							)}
						</For>
						<div></div>
						<div></div>
						<div></div>
						<div>
							<p className='text-right'>
								Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								{currency.format(
									items().reduce((a, v) => a + v.quantity * v.price, 0)
								)}
							</p>
						</div>
						<div className='flex'>
							<div className='flex-grow'></div>
							<div className='flex-end'>
								<button
									id='checkout'
									className='bg-green-900 text-white py-2 px-5 rounded-md text-sm'
									onClick={emptyCart}>
									Checkout
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default MiniCart;
