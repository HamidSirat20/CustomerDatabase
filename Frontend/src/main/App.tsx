import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerTable from "../components/CustomerTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header subtitle="Customers data will be stored and protected." />
          <Routes>
            <Route path="/" element={<CustomerTable />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
