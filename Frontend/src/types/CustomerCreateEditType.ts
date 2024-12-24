import AddressType from "./AddressType";

interface CustomerCreateEditType {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: Date;
  image?: string;
  address: AddressType;
}

export default CustomerCreateEditType;
