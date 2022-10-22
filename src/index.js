import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import App from "./App";
import Home from "./containers/home/Home";
import Admin from "./containers/admin/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes>
			{/* home route  */}
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="/admin" element={<Admin />} />
			</Route>
		</Routes>
	</Router>
);
