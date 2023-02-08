import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useDarkModeContext } from "../../context/DarkModeContext";

export default function ItemListContainer() {
	const [events, setEvents] = useState([]);
	const { idCategory } = useParams();
	const { darkMode } = useDarkModeContext();
	console.log(darkMode);
	useEffect(() => {
		if (idCategory) {
			fetch("./json/events.json")
				.then((response) => response.json())
				.then((events) => {
					console.log(events);
					const eventsList = ItemList({ events }); //Array de productos en JSX
					console.log(eventsList);
					setEvents(eventsList);
				});
		} else {
			fetch("./json/events.json")
				.then((response) => response.json())
				.then((events) => {
					console.log(events);
					const eventsList = ItemList({ events }); //Array de productos en JSX
					console.log(eventsList);
					setEvents(eventsList);
				});
		}
	}, [idCategory]);
	return <div className="row">{events}</div>;
}
