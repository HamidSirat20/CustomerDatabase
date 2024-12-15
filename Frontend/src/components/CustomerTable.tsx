import { useEffect } from "react";

import { getAllCustomers } from "../redux/reducers/customersReducer";
import {
  useCustomDispatch,
  useCustomSelector,
} from "../hooks/useCustomSelector";
import LoadingStatus from "./LoadingStatus";

const CustomerTable = () => {
  const { customers, status, error, isSuccess } = useCustomSelector(
    (state) => state.customersReducer
  );

  const dispatch = useCustomDispatch();
  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  if (!isSuccess) {
    return <LoadingStatus status={status}></LoadingStatus>;
  }

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
