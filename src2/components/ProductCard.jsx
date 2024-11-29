import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ id, name, price, image }) => {
	return (
		<motion.div
			className="border rounded-lg shadow hover:shadow-lg transition"
			whileHover={{ scale: 1.05 }}
		>
			<img
				src={image}
				alt={name}
				className="w-full h-48 object-cover rounded-t-lg"
			/>
			<div className="p-4">
				<h3 className="text-lg font-semibold">{name}</h3>
				<p className="text-primary font-bold mb-2">₹{price}</p>
				<Link to={`/products/${id}`}>
					<button className="bg-primary text-white py-2 px-4 rounded shadow hover:bg-orange-400">
						View Details
					</button>
				</Link>
			</div>
		</motion.div>
	);
};

export default ProductCard;
