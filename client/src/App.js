import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./Home/Home";
import Merch from "./Shop/Merch";
import Cart from "./state/Cart";
import CheckoutNavbar from "./CheckoutNavbar";
import Account from "./Account/Account";
import ProtectedRoutes from "./Protected-Routes/ProtectedRoutes";
import AppLayout from "./AppLayout";
import AccountDetails from "./Account/AccountDetails";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route path="/merch" element={<Merch />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account/:name" element={<AccountDetails />} />
            {/* More protected routes */}
          </Route>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
     */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
