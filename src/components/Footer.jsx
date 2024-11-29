import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<p>© 2024 DryFruitsDelight. All Rights Reserved.</p>
			<br></br>
			<div className="social-icons">
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<FaFacebook />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Twitter"
				>
					<FaTwitter />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<FaInstagram />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
