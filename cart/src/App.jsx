import { render } from 'solid-js/web';

import './index.scss';
import 'remixicon/fonts/remixicon.css';

import Header from 'home/Header';
import Footer from 'home/Footer';
import CartContent from './CartContent';

const App = () => (
	<div class='text-3xl mx-auto max-w-6xl'>
		<Header name='Cart' />
		<CartContent />
		<Footer />
	</div>
);
render(App, document.getElementById('app'));
