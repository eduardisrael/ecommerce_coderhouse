import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
	const [event, setEvent] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		console.log("///");
		fetch("../json/events.json")
			.then((response) => response.json())
			.then((events) => {
				const item = events.find((e) => e.id === parseInt(id));
				setEvent(item);
			});
	}, []);
	return (
		<div className="card mb-3 container itemDetail">
			<ItemDetail item={event} />
		</div>
	);
};
