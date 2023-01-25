import React from "react";

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
					<h5 className="card-title">{item.nombre}</h5>
					<p className="card-text">{item.name}</p>
					<a href="#" className="btn btn-primary">
						Details
					</a>
				</div>
			</div>
		</div>
	);
};

export default Item;
