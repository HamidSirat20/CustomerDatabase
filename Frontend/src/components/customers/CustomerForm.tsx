import React, { useState } from "react";

import CustomerCreateEditType from "../../types/CustomerCreateEditType";
import toBase64 from "../../toBase64";

interface Props {
  newCustomer: CustomerCreateEditType;
  submitted: (customer: CustomerCreateEditType) => void;
  tableName: string;
}

const CustomerForm = ({ newCustomer, submitted, tableName }: Props) => {
  const [customer, setCustomer] = useState<CustomerCreateEditType>({
    ...newCustomer,
  });

  const onSubmitForm: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    submitted(customer);
  };

  const onFileSelected = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    e.target.files &&
      e.target.files[0] &&
      setCustomer({ ...newCustomer, image: await toBase64(e.target.files[0]) });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form
        className="p-5 shadow form-inline w-100 bg-light"
        style={{ maxWidth: "600px" }}>
        <h4 className="d-flex justify-content-center mb-4 text-primary">
          {tableName}
        </h4>
        <div className="form-group row mb-3">
          <label htmlFor="firstName" className="col-sm-4 col-form-label">
            First Name:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={customer.firstName}
              name="firstName"
              onChange={(e) =>
                setCustomer({ ...customer, firstName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="lastName" className="col-sm-4 col-form-label">
            Last Name:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={customer.lastName}
              onChange={(e) =>
                setCustomer({ ...customer, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="email" className="col-sm-4 col-form-label">
            Email:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">
            Phone Number:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              value={customer.mobileNumber}
              onChange={(e) =>
                setCustomer({ ...customer, mobileNumber: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="dateOfBirth" className="col-sm-4 col-form-label">
            Date of Birth:
          </label>
          <div className="col-sm-8">
            <input
              type="date"
              className="form-control"
              placeholder="Date of Birth"
              value={
                customer.dateOfBirth
                  ? customer.dateOfBirth.toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  dateOfBirth: new Date(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="image" className="col-sm-4 col-form-label">
            Image URL:
          </label>
          <div className="col-sm-8">
            <input
              type="file"
              id="image"
              className="form-control"
              placeholder="Image url"
              onChange={onFileSelected}
            />
            <div className="mt-2">
              <img src={newCustomer.image} />
            </div>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="addressStreet" className="col-sm-4 col-form-label">
            Address Street:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Address Street"
              value={customer.address.street}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: {
                    ...customer.address,
                    street: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="addressCity" className="col-sm-4 col-form-label">
            Address City:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Address City"
              value={customer.address.city}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: {
                    ...customer.address,
                    city: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="addressState" className="col-sm-4 col-form-label">
            Address State:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Address State"
              value={customer.address.state}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: {
                    ...customer.address,
                    state: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="addressZipCode" className="col-sm-4 col-form-label">
            Address Zip Code:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Address Zip Code"
              value={customer.address.zipCode}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: {
                    ...customer.address,
                    zipCode: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="addressCountry" className="col-sm-4 col-form-label">
            Address Country:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Address Country"
              value={customer.address.country}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: {
                    ...customer.address,
                    country: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mt-2" onClick={onSubmitForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
