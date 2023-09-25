const API_SERVER = "http://localhost:8080";

export const getProducts = async () => (await fetch(`${API_SERVER}/products`)).json();

export const getProdById = (id) => fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
