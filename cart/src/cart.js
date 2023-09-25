import { BehaviorSubject } from 'rxjs';
import { createEffect, createSignal } from 'solid-js';

const API_SERVER = 'http://localhost:8080';

export const cart = new BehaviorSubject(null);
export const jwt = new BehaviorSubject(null);

export const addToCart = async (id) => {
	const data = await (
		await fetch(`${API_SERVER}/cart`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt.value}`
			},
			body: JSON.stringify({ id })
		})
	).json();
	cart.next(data);
	return data;
};

export const emptyCart = async (_) => {
	const data = await (
		await fetch(`${API_SERVER}/cart`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt.value}`
			}
		})
	).json();
	cart.next(data);
	return data;
};

export const getCart = async (_) => {
	const data = await (
		await fetch(`${API_SERVER}/cart`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt.value}`
			}
		})
	).json();
	cart.next(data);
	return data;
};

export const login = async (username, password) => {
	const data = await (
		await fetch(`${API_SERVER}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
	).json();
	jwt.next(data.access_token);
	getCart();
	return data.access_token;
};

export const useLoggedIn = (_) => {
	const [loggedIn, setLoggedIn] = createSignal(!!jwt.value);
	createEffect(() => {
		setLoggedIn(!!jwt.value);
		return jwt.subscribe(() => {
			setLoggedIn(!!jwt.value);
		});
	});
	return loggedIn;
};
