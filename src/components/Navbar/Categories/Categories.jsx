import React from "react";

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
					<a className="dropdown-item" href="#">
						Concerts
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Festivals
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Workshops
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Museum
					</a>
				</li>
			</ul>
		</li>
	);
};

export default Categories;
