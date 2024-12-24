import { Link } from "react-router-dom";
import CustomerType from "../../types/CustomerType";

interface Props {
  customers: CustomerType[];
  actions: (
    id: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  nav: (url: string) => void;
}

const CustomerGrid = ({ customers, nav, actions }: Props) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Customer List</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.email + customer.dateOfBirth}
              onClick={() => nav(`customers/${customer.id}`)}>
              <td>{customer.id}</td>
              <td>{`${customer.firstName} ${customer.lastName}`}</td>
              <td>{customer.email}</td>
              <td>
                {customer.address
                  ? `${customer.address.street}, ${customer.address.city}, ${customer.address.state}, ${customer.address.zipCode}, ${customer.address.country}`
                  : "Address not available"}
              </td>
              <td>
                <button
                  onClick={(e) => actions(customer.id, e)}
                  className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row mt-3">
        <div className="col-12">
          <Link
            className="btn btn-outline-success btn-lg d-block w-100"
            to={`customers/add`}>
            Add Customer
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/color/48/add--v1.png"
              alt="add--v1"
              className="ml-10"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerGrid;
