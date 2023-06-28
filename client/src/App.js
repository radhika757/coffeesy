import "./App.css";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar";
import Merch from "./Shop/Merch";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/merch' element={<Merch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
