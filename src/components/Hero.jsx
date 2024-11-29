import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = () => {
	useEffect(() => {
		gsap.from(".hero-text", { y: 50, opacity: 0, duration: 1.5, stagger: 0.3 });
		gsap.from(".hero-subtext", {
			y: 20,
			opacity: 0,
			duration: 1.5,
			delay: 0.5,
		});
		gsap.from(".shop-now", { scale: 0.8, opacity: 0, duration: 1.2, delay: 1 });
		gsap.from(".hero-image img", {
			x: -100,
			opacity: 0,
			duration: 2,
			delay: 0.8,
		});
	}, []);

	return (
		<section id="hero" className="hero">
			<div className="hero-overlay"></div>
			<div className="hero-content">
				<h1 className="hero-text">
					Fresh, Organic Dry Fruits Delivered to Your Doorstep
				</h1>
				<p className="hero-subtext">
					Experience the taste of premium dry fruits with just one click.
				</p>
				<button className="shop-now">Shop Now</button>
			</div>
		</section>
	);
};

export default Hero;

//<div className="hero-image">
//<img src="/assets/ss.png" alt="Dry fruits" />
//</div>
