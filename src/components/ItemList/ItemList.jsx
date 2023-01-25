import React from "react";
import Item from "../Item/Item";

const ItemList = ({ events }) => {
	return (
		<>
			{events.map((event) => (
				<Item item={event} key={event.id} />
			))}
		</>
	);
};

export default ItemList;
