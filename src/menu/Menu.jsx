import React, { useState } from "react";

const Menu = ({ menuItems }) => {
	const [orderBasket, setOrderBasket] = useState([]);

	const pushProduct = (id) => {
		const existingProduct = orderBasket.find((item) => item.id === id);

		if (existingProduct) {
			const newData = menuItems.find((item) => item.id === id);
			existingProduct.count += 1;
			existingProduct.price += newData.price;
		} else {
			const newData = menuItems.find((item) => item.id === id);
			const newProduct = { ...newData, count: 1 };
			setOrderBasket([...orderBasket, newProduct]);
		}
	};

	const deleteProduct = (id, index) => {
		const updatedBasket = [...orderBasket];
		const deletedProduct = updatedBasket[index];

		if (deletedProduct.count > 1) {
			const newData = menuItems.find((item) => item.id === id);
			deletedProduct.count -= 1;
			deletedProduct.price -= newData.price;
		} else {
			updatedBasket.splice(index, 1);
		}

		setOrderBasket(updatedBasket);
	};

	const renderOrder = () => {
		return orderBasket.map((item, index) => (
			<div className="product" key={index}>
				<button onClick={() => deleteProduct(item.id, index)}>delete</button>
				<h5>{item.title}</h5>
				<p>count: {item.count}</p>
				<p>price: {item.price}</p>
			</div>
		));
	};

	const renderTotalOrder = () => {
		let totalQuantity = 0;
		let totalPrice = 0;

		orderBasket.forEach((item) => {
			totalQuantity += item.count;
			totalPrice += item.price;
		});

		return (
			<div className="total">
				<h1>В корзине {totalQuantity} товаров.</h1>
				<h2>Итого: {totalPrice} сом</h2>
				{orderBasket.length === 0 ? <h3>Список заказов пуст</h3> : null}
			</div>
		);
	};

	return (
		<div>
			<div id="orderList">{renderOrder()}</div>
			<div id="totalOrder">{renderTotalOrder()}</div>
		</div>
	);
};

export default Menu;
