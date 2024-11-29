import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Hero from "./components/Hero";

const App = () => {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/:id" element={<ProductDetails />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
