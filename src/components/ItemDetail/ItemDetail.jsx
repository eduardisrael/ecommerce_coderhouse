import { ItemCount } from "../ItemCount/ItemCount";
export const ItemDetail = ({ item }) => {
	const onAdd = (quantity) => {
		console.log(quantity);
		console.log(item);
	};

	return (
		<div className="row g-0">
			<div className="col-md-4">
				<img
					src={process.env.PUBLIC_URL + "/img/" + item.img}
					className="img-fluid rounded-start"
					alt={`Imagen de ${item.name}`}
				/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title">
						{item.name} {item.model}
					</h5>
					<p className="card-text">Brand: {item.brand}</p>
					<p className="card-text">
						value: ${new Intl.NumberFormat("de-DE").format(item.value)}
					</p>
					<p className="card-text">Stock: {item.stock}</p>
					<ItemCount initialValue={1} stock={item.stock} onAdd={onAdd} />
					<button className="btn btn-secondary">Complete Order</button>
				</div>
			</div>
		</div>
	);
};
