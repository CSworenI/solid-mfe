import { For, Show, createResource } from 'solid-js';
import { A } from '@solidjs/router';

import { currency, getProducts } from './products';
import Card from './Card';

const HomeContent = () => {
	const [products] = createResource(getProducts);

	return (
		<>
			<Show when={products()} fallback={<p>Loading...</p>}>
				<div className='my-5 grid grid-cols-5 gap-4'>
					<For each={products()}>
						{(product) => (
							<A href={`/product/${product.id}`}>
								<Card flat={false} round={true}>
									<div className='flex flex-col items-center justify-center p-2'>
										<img
											className='max-h-60'
											src={product.image}
											alt={product.name}
										/>
									</div>
									<div className='flex text-xl p-2'>
										<div className='flex-grow font-bold'>{product.name}</div>
										<div className='flex-end'>
											{currency.format(product.price)}
										</div>
									</div>
									<div className='text-sm'>{product.description}</div>
								</Card>
							</A>
						)}
					</For>
				</div>
			</Show>
		</>
	);
};

export default HomeContent;
