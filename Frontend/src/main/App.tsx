import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../components/about/About";
import PageNotFound from "../components/PageNotFound";
import CustomersPage from "../components/customers/CustomersPage";
import Header from "../components/nav/Header";
import AddCustomer from "../components/customers/AddCustomer";
import EditCustomer from "../components/customers/EditCustomer";
import CustomerDetail from "../components/customers/CustomerDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header subtitle="Customers data will be stored and protected." />
          <Routes>
            <Route path="/" element={<CustomersPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />
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
