import { createResource } from 'solid-js';
import { useParams } from '@solidjs/router';

import { Card } from 'home/Card';
import { currency, getProdById } from 'home/products';

const PDPContent = () => {
	const { id } = useParams(),
		[product] = createResource(id, getProdById);

	return (
		<>
			<Show when={product()} fallback={<p>Loading...</p>}>
				<Card round={true} flat={false}>
					<div className='grid grid-cols-5 gap-5'>
						<div></div>
						<div className='flex flex-col items-center'>
							<img
								className='object-scale-down'
								src={product().image}
								alt={product().name}
							/>
						</div>
						<div className='font-bold col-span-2'>
							<div className='flex text-2xl'>
								<h1 className='flex-grow'>{product().name}</h1>
								<div className='flex-end'>{currency.format(product().price)}</div>
							</div>
							<div className='mt-10 text-2xl'>{product().description}</div>
							<div className='mt-10 text-sm'>{product().longDescription}</div>
						</div>
					</div>
				</Card>
			</Show>
		</>
	);
};

export default PDPContent;
