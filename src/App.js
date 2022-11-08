import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
