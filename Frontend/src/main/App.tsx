import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerDetails from "../components/customers/CustomerDetails";
import About from "../components/about/About";
import PageNotFound from "../components/PageNotFound";
import CustomersPage from "../components/customers/CustomersPage";
import Header from "../components/nav/Header";
import AddCustomer from "../components/customers/AddCustomer";
import EditCustomer from "../components/customers/EditCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header subtitle="Customers data will be stored and protected." />
          <Routes>
            <Route path="/" element={<CustomersPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
            <Route path="/customers/add" element={<AddCustomer />} />
            <Route path="/customers/edit/:id" element={<EditCustomer />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
