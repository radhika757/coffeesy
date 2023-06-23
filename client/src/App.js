import "./App.css";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
