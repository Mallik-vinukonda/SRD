import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

import "./Header.css";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<div className="logo">
				<img src="/assets/h2.png" alt="logo" width={56} height={58} />
				Sri Ramdooth Dry-fruits
			</div>
			<button className="menu-toggle" onClick={toggleMenu}>
				{isMenuOpen ? <FaTimes /> : <FaBars />}
			</button>
			<nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
				<a href="#products">Products</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
				<a href="#">
					<FaShoppingCart />
				</a>
			</nav>
		</header>
	);
};

export default Header;
