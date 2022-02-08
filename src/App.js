// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Navbar from "./Navbar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
        <Route path="/list" element={<List />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
