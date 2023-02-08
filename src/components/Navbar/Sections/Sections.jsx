import React from "react";
import { Link } from "react-router-dom";

export default function Sections() {
	return (
		<>
			<li className="nav-item">
				<Link className="nav-link" to={"/"}>
					<button className="btn btn-dark">Home</button>
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to={"/contacto"}>
					<button className="btn btn-dark">Contact</button>
				</Link>
			</li>
		</>
	);
}
