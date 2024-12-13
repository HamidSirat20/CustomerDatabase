import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CustomerTable from "../components/CustomerTable";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <Header subtitle="Customers data will be stored and protected." />
        <CustomerTable />
      </div>
    </>
  );
}

export default App;
