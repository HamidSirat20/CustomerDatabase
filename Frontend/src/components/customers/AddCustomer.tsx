import { useNavigate } from "react-router-dom";
import { useCustomDispatch } from "../../hooks/useCustomSelector";
import { createCustomer } from "../../redux/reducers/customersReducer";
import AddressType from "../../types/AddressType";
import CustomerForm from "./CustomerForm";
import CustomerCreateEditType from "../../types/CustomerCreateEditType";

const AddCustomer = () => {
  const dispatch = useCustomDispatch();
  const nav = useNavigate();

  const initialAddress: AddressType = {
    id: 0,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  };

  const initialCustomer: CustomerCreateEditType = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: new Date(),
    image: "",
    address: initialAddress,
  };

  const handleDispatch = (customer: CustomerCreateEditType) => {
    dispatch(createCustomer(customer));
    nav("/");
  };

  return (
    <CustomerForm
      newCustomer={initialCustomer}
      submitted={handleDispatch}
      tableName="Add New Customer"
    />
  );
};

export default AddCustomer;
