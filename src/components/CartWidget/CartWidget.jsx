import React from "react";

const CartWidget = ({ cartQuantity }) => {
	return (
		<>
			<i className="bi bi-cart-fill"></i>
			<button className="btn btn-dark">Carrito</button>
			<p>{cartQuantity}</p>
		</>
	);
};

export default CartWidget;
