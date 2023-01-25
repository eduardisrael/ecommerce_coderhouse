import React from "react";

const CartWidget = ({ cartQuantity }) => {
	return (
		<>
			<i className="bi bi-cart-fill"></i>
			<p>{cartQuantity}</p>
		</>
	);
};

export default CartWidget;
