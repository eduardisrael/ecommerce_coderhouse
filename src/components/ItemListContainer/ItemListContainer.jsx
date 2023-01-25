import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		fetch("./json/events.json")
			.then((response) => response.json())
			.then((events) => {
				console.log(events);
				const eventsList = ItemList({ events }); //Array de productos en JSX
				console.log(eventsList);
				setEvents(eventsList);
			});
	}, []);
	return <div className="row">{events}</div>;
}
