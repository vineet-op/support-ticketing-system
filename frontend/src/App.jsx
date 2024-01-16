import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
