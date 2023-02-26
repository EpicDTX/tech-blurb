import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/careers" element={<Careers />} />
			</Routes>
		</div>
	);
}

export default App;
