import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Products from "./components/Product/Products";
import Purchase from "./components/Purchase";
import Stock from "./components/Stock";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Products />} exact />
          <Route path="/addProduct" element={<AddProduct />} exact />
          <Route path="/purchase" element={<Purchase />} exact />
          <Route path="/stock" element={<Stock />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
