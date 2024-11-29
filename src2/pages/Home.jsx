import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const Home = () => {
	const products = [
		{ id: 1, name: "Almonds", price: 300, image: "/images/almond.jpg" },
		{ id: 2, name: "Cashews", price: 250, image: "/images/apricot.jpg" },
		{ id: 3, name: "Pista", price: 300, image: "/images/fig.jpg" },
		{ id: 4, name: "Walnuts", price: 450, image: "/images/mixed3.jpg" },
	];

	return (
		<div>
			<Hero />
			<section className="py-10 px-8">
				<h2 className="text-3xl font-bold text-center mb-8">
					Our Featured Products
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
