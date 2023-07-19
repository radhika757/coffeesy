import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar";
import Merch from "./Shop/Merch";
import Cans from "./Shop/Cans";
import Cart from "./state/Cart";
import CheckoutNavbar from "./CheckoutNavbar";
import Account from "./Account/Account";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer/>
              </>
            }
          />
          <Route
            path="/merch"
            element={
              <>
                <Navbar />
                <Merch />
                <Footer/>
              </>
            }
          />
          <Route
            path="/coffee-cans"
            element={
              <>
                <Navbar />
                <Cans />
                <Footer/>
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <CheckoutNavbar />
                <Cart />
              </>
            }
          />

          <Route
          path="/account"
          element={
            <>
            <Navbar/>
            <Account/>
            <Footer/>
            </>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
