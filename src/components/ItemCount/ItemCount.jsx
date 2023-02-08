import { useState } from "react";
import { toast } from "react-toastify";
export const ItemCount = ({ initialValue, stock, onAdd }) => {
	const [count, setCount] = useState(initialValue);

	const plus = () => count < stock && setCount(count + 1);
	const subtract = () => count > initialValue && setCount(count - 1);
	const addCart = () => {
		onAdd(count);
		toast(`You add ${count} products to the cart!`);
	};

	return (
		<>
			<button className="btn btn-light" onClick={() => subtract()}>
				-
			</button>
			{count}
			<button className="btn btn-dark" onClick={() => plus()}>
				+
			</button>
			<button className="btn btn-dark" onClick={() => addCart()}>
				Add to cart
			</button>
		</>
	);
};
