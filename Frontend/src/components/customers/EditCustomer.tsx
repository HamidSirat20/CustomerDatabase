import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  useCustomDispatch,
  useCustomSelector,
} from "../../hooks/useCustomSelector";
import {
  getOneCustomerById,
  editCustomer,
} from "../../redux/reducers/customersReducer";
import CustomerForm from "./CustomerForm";
import CustomerCreateEditType from "../../types/CustomerCreateEditType";

const EditCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useCustomDispatch();

  const { id } = useParams();
  if (!id) throw new Error("Customer ID is required!");
  const customerId = parseInt(id);

  const [customer, setCustomer] = useState<CustomerCreateEditType | null>(null);
  const { customers, status } = useCustomSelector(
    (state) => state.customersReducer
  );

  useEffect(() => {
    const fetchCustomer = async () => {
      const result = await dispatch(getOneCustomerById(customerId));
      if (result.meta.requestStatus === "fulfilled") {
        console.log("Customer fetched successfully");
      } else {
        console.error("Failed to fetch customer");
      }
    };
    fetchCustomer();
  }, [customerId, dispatch]);

  useEffect(() => {
    const existingCustomer = customers.find((c) => c.id === customerId);
    if (existingCustomer) {
      console.log("Customer found in store:", existingCustomer);
      setCustomer({
        firstName: existingCustomer.firstName,
        lastName: existingCustomer.lastName,
        email: existingCustomer.email,
        mobileNumber: existingCustomer.mobileNumber,
        dateOfBirth: new Date(existingCustomer.dateOfBirth),
        image: existingCustomer.image || "",
        address: { ...existingCustomer.address },
      });
    } else if (status === "success") {
      console.error("Customer not found in store");
    }
  }, [customers, customerId, status]);

  const handleEdit = async (updatedCustomer: CustomerCreateEditType) => {
    const result = await dispatch(
      editCustomer({ id: customerId, customer: updatedCustomer })
    );
    if (result.meta.requestStatus === "fulfilled") {
      console.log("Customer updated successfully");
      navigate("/");
    } else {
      console.error("Failed to update customer");
    }
  };

  return (
    <div>
      <h2 className="text-center">Edit Customer</h2>
      {status === "loading" && !customer ? (
        <p className="text-center">Loading customer data...</p>
      ) : customer ? (
        <CustomerForm
          newCustomer={customer}
          submitted={handleEdit}
          tableName="Edit Customer Details"
        />
      ) : (
        <p className="text-center text-danger">Failed to load customer data</p>
      )}
    </div>
  );
};

export default EditCustomer;
