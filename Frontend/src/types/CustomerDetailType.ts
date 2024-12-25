import AddressType from "./AddressType";

interface CustomerDetailType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  image?: string;
  address: AddressType;
}

export default CustomerDetailType;
