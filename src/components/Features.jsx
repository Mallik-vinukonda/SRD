import React from "react";
import "./Features.css";

const Features = () => {
	return (
		<section id="features" className="features">
			<h2>Why Choose Us?</h2>
			<div className="features-grid">
				<div className="feature">
					<h3>100% Organic</h3>
					<p>
						Only the highest quality organic dry fruits sourced directly from
						farmers.
					</p>
				</div>
				<div className="feature">
					<h3>Fast Delivery</h3>
					<p>Get your orders delivered to your door in under 24 hours.</p>
				</div>
				<div className="feature">
					<h3>Secure Payments</h3>
					<p>Safe and secure payments with multiple payment options.</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
