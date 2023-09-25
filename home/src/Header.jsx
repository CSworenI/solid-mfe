import Login from 'cart/Login';
// import MiniCart from 'cart/MiniCart';

const Header = (props) => {
	return (
		<>
			<div className='p-5 bg-blue-900 text-blue-400 text-3xl font-bold'>
				<div className='flex'>
					<div className='flex-grow'>Digital Trading Cards | {props.name}</div>
					<div className='flex-end'>
						{/* <Login /> */}
						{/* <MiniCart /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
