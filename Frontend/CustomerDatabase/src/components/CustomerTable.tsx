import { useEffect, useState } from "react";
import CustomerType from "../types/CustomerType";
import config from "../config";
import useFetchCustomers from "../hooks/CustomerDataHooks";

const CustomerTable = () => {
  const customers = useFetchCustomers();

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Customer List</h1>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{`${customer.firstName} ${customer.lastName}`}</td>
                <td>{customer.email}</td>
                <td>
                  {`${customer.address.street}, ${customer.address.city}, ${customer.address.state}, ${customer.address.zipCode}, ${customer.address.country}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerTable;
