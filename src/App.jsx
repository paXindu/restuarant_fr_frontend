import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./customer/pages/Home/Home";
import Foods from "./customer/pages/Foods";
import Food from "./customer/pages/Food";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:id" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
