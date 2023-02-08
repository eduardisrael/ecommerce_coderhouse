/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import ItemListContainer from "./ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Navbar from "./Navbar/Navbar";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { Contact } from "./Contact/Contact";

import { DarkModeProvider } from "../context/DarkModeContext";

function App() {
	return (
		<>
			<BrowserRouter>
				<DarkModeProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route
							path="/category/:idCategory"
							element={<ItemListContainer />}
						/>
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<ToastContainer />
				</DarkModeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
