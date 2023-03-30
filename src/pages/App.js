import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";
import Error from "./error/Error";
import { Provider } from "react-redux";
import store from "../pages/redux";

const App = () => {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Navigate to="/Home" />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Provider>
	);
};

export default App;
