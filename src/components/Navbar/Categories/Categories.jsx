import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<button className="btn btn-dark">Categories</button>
			</a>
			<ul className="dropdown-menu">
				<li>
					<Link className="dropdown-item" to={"/category/1"}>
						Concerts
					</Link>
				</li>
				<li>
					<Link className="dropdown-item" to={"/category/2"}>
						Festivals
					</Link>
				</li>
				<li>
					<Link className="dropdown-item" to={"/category/3"}>
						Workshops
					</Link>
				</li>
				<li>
					<Link className="dropdown-item" to={"/category/4"}>
						Museum
					</Link>
				</li>
			</ul>
		</li>
	);
};

export default Categories;
