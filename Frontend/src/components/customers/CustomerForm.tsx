import React, { useState } from "react";

import CustomerDetails from "../../types/CustomerDetails";

interface Props {
  newCustomer: CustomerDetails;
  submitted: (customer: CustomerDetails) => void;
}

const CustomerForm = ({ newCustomer, submitted }: Props) => {
  const [customer, setCustomer] = useState<CustomerDetails>({ ...newCustomer });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData()

    const firstName = formData.get("firstName");
  };

  return (
    <form onSubmit={onSubmitForm} className="mt-2">
      <div className="form-group">
        <label htmlFor="firstName"> First Name: *</label>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          value={customer.firstName}
          name="firstName"
          onChange={(e) =>
            setCustomer({ ...newCustomer, firstName: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName"> Last Name: *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          value={customer.lastName}
          onChange={(e) =>
            setCustomer({ ...newCustomer, lastName: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="email"> Email: *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={customer.email}
          onChange={(e) =>
            setCustomer({ ...newCustomer, email: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber"> Phone Number: *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          value={customer.phoneNumber}
          onChange={(e) =>
            setCustomer({ ...newCustomer, phoneNumber: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth"> Date of Birth: *</label>
        <input
          type="date"
          className="form-control"
          placeholder="Date of birth"
          value={customer.dateOfBirth.toDateString()}
          onChange={(e) =>
            setCustomer({
              ...newCustomer,
              dateOfBirth: new Date(e.target.value),
            })
          }
        />
      </div>
    </form>
  );
};

export default CustomerForm;
