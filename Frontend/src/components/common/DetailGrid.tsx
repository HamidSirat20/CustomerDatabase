import { Link } from "react-router-dom";
import CustomerType from "../../types/CustomerType";
import defaultImage from "./defaultPhoto";
import BackToButton from "./BackToButton";

interface Props {
  customers: CustomerType[];
  actions: (
    id: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  buttonName: string;
  tableTile: string;
}

const DetailGrid = ({ customers, buttonName, tableTile, actions }: Props) => {
  return (
    <>
      <div className="container mt-4">
        <BackToButton route="/" buttonName="Go to Back" />
        <h1 className="text-center mb-4">{tableTile}</h1>
        {customers.map((customer) => (
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4>{`${customer.firstName} ${customer.lastName}`}</h4>
            </div>
            <div className="card-body d-flex align-items-center">
              <img
                src={customer.image ? customer.image : defaultImage}
                alt="Customer"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginRight: "20px",
                }}
              />
              <div>
                <p>
                  <strong>Email:</strong> {customer.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {customer.mobileNumber}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {new Date(customer.dateOfBirth).toLocaleDateString()}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {`${customer.address.street}, ${customer.address.city}, ${customer.address.state}, ${customer.address.zipCode}, ${customer.address.country}`}
                </p>
                <button
                  onClick={(e) => actions(customer.id, e)}
                  className="btn btn-danger btn-sm">
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailGrid;
