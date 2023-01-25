/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Navbar from "./Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<ItemListContainer></ItemListContainer>
			</div>
		</>
	);
}

export default App;
