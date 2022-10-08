import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import App from "./App";
import Home from "./containers/home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes>
			{/* home route  */}
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	</Router>
);
