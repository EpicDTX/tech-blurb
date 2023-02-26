import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import logo from './logo.svg';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
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
