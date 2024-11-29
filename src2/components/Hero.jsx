import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<motion.div
			className=" text-black text-2xl text-center py-20 px-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className="text-center py-20">
				<h1
					className="text-8xl font-extrabold text-transparent bg-clip-text"
					style={{
						backgroundImage: "url('/images/mixed3.jpg')",
						WebkitBackgroundClip: "text",
						backgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					Welcome to Sri Ramdoot Dry Fruits
				</h1>
				<p className="text-lg mt-4">
					Premium quality dry fruits for a healthy lifestyle.
				</p>
			</div>

			<Link to="/products">
				<button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition">
					Shop Now
				</button>
			</Link>
		</motion.div>
	);
};

export default Hero;
