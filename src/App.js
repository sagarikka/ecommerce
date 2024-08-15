import './App.css';
import Home from './routes/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './routes/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
