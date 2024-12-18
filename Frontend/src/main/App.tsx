import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerTable from "../components/CustomerTable";
import CustomerDetails from "../components/CustomerDetails";
import Hamid from "../components/Hamid";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header subtitle="Customers data will be stored and protected." />
          <Routes>
            <Route path="/" element={<CustomerTable />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
