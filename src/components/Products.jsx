import React from "react";
import "./Products.css";

const productList = [
	{
		name: "Almonds",
		price: "300 rs /kg",
		image: "../assets/a.jpeg",
	},
	{
		name: "Cashews",
		price: "450 rs/kg",
		image: "../assets/c.webp",
	},
	{
		name: "Pistachios",
		price: "350 rs /kg",
		image: "../assets/p.jpeg",
	},
	{
		name: "Fig",
		price: "500 rs/kg",
		image: "../assets/fig.jpeg",
	},
	{
		name: "dates",
		price: "199 rs/kg",
		image: "../assets/dates.jpeg",
	},
];

const Products = () => {
	return (
		<section className="products-section">
			<h2>Our Dry Fruits</h2>
			<div className="products-grid">
				{productList.map((product, index) => (
					<div className="product-card" key={index}>
						<img
							src={product.image}
							alt={product.name}
							className="product-image"
						/>
						<h3 className="product-name">{product.name}</h3>
						<p className="product-price">{product.price}</p>
						<button className="add-to-cart">Add to Cart</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products;
