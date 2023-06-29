import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar";
import Merch from "./Shop/Merch";
import Cans from "./Shop/Cans";
import Cart from "./state/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/coffee-cans" element={<Cans />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
