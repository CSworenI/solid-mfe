import { render } from 'solid-js/web';

import './index.scss';
import 'remixicon/fonts/remixicon.css';

import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';
import { Router } from '@solidjs/router';

const App = () => (
	<Router>
		<div class='text-3xl mx-auto max-w-6xl'>
			<Header name='Home' />
			<HomeContent />
			<Footer />
		</div>
	</Router>
);
render(App, document.getElementById('app'));
