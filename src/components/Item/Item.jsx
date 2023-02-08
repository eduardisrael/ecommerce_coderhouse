import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<div className="col-sm-6">
			<div className="card" style={{ width: "18rem", margin: "10px" }}>
				<img
					src={process.env.PUBLIC_URL + "/img/" + item.img}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
					<p className="card-text">{item.description}</p>
					<p className="card-text">{item.organizer}</p>
					<p className="card-text">
						$ {new Intl.NumberFormat("de-DE").format(item.value)}
					</p>
					<button className="btn btn-dark">
						<Link className="nav-link" to={`/item/${item.id}`}>
							Ver Producto
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
