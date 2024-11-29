import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import "./app.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Features />
			<Products />
			<Footer />
		</div>
	);
}

export default App;
