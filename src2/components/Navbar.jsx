import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<motion.nav
			className="bg-primary text-white py-4 px-6 flex justify-between items-center shadow-md"
			initial={{ y: -50 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Link to="/" className="text-2xl font-bold">
				Sri RamDhooth Dryfruit Store
			</Link>
			<div className="flex gap-4">
				<Link to="/" className="hover:text-secondary">
					Home
				</Link>
				<Link to="/products" className="hover:text-secondary">
					Products
				</Link>
				<Link to="/cart" className="hover:text-secondary">
					Cart
				</Link>
			</div>
		</motion.nav>
	);
};

export default Navbar;
