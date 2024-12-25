import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import {
  useCustomDispatch,
  useCustomSelector,
} from "../../hooks/useCustomSelector";
import LoadingStatus from "../common/LoadingStatus";
import {
  deleteCustomer,
  getOneCustomerById,
} from "../../redux/reducers/customersReducer";
import DetailGrid from "./DetailGrid";
import CustomerType from "../../types/CustomerType";
import CustomerDetailType from "../../types/CustomerDetailType";

const CustomerDetails = () => {
  const { id } = useParams();
  const dispatch = useCustomDispatch();
  const nav = useNavigate();

  const { customers, status, error } = useCustomSelector(
    (state) => state.customersReducer
  );

  const customerId = id ? parseInt(id) : null;

  useEffect(() => {
    if (customerId) {
      dispatch(getOneCustomerById(customerId));
    }
  }, [dispatch, customerId]);

  const HandleDelete = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    dispatch(deleteCustomer(id));
    nav("/");
  };

  if (status === "loading") return <LoadingStatus status="loading" />;
  if (!customers || customers.length === 0)
    return (
      <div className="alert alert-warning text-center">
        No customer data found!
      </div>
    );
  function mapCustomerTypeToDetails(customer: CustomerType): CustomerDetailType {
    return {
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phoneNumber: customer.mobileNumber, // Map `mobileNumber` to `phoneNumber`
      dateOfBirth: customer.dateOfBirth,
      image: customer.image,
      address: customer.address,
    };
  }

  const customerDetails = customers.map(mapCustomerTypeToDetails);

  return (
    <>
      <DetailGrid
        customers={customerDetails}
        actions={HandleDelete}
        buttonName="Delete"
        tableTile="Customers Details"
      />
    </>
  );
};

export default CustomerDetails;
