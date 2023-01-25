import { useState } from "react";

export const Counter = () => {
	const [counter, setCounter] = useState(0);
	//Var       //Modificar var     //Estado inicial

	const plus = () => setCounter(counter + 1); //contador = contador + 1
	const rest = () => setCounter(counter - 1);

	return (
		<>
			<button className="btn btn-dark" onClick={() => plus()}>
				+
			</button>
			{counter}
			<button className="btn btn-light" onClick={() => rest()}>
				-
			</button>
		</>
	);
};
