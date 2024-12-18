import AddressType from "./AddressType";

interface CustomerType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: Date;
  image?:string
  address: AddressType;
}

export default CustomerType;
