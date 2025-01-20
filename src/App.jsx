// import Routes from 'my-react-router-app/app/routes'
import { Route, Routes } from "react-router-dom";
import React from 'react';
import InventoryView from "./pages/inventoryview";
import ProductRestock from "./pages/productrestock";
import ProductEditForm from "./pages/productedit";
import AddProductForm from "./pages/addproduct";
import ProductList from "./pages/productlist";
import Dashboard from "./pages/inventorydashboard";

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory" element={<InventoryView />} />
      <Route path="/restock" element={<ProductRestock />} />
      <Route path="/addproduct" element={<AddProductForm />} />
      <Route path="/edit" element={<ProductEditForm />} />
      <Route path="/list" element={<ProductList />} />
     </Routes>
    </div>
  )
}

export default App
