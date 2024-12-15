import AddressType from "./AddressType";

interface CustomerType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: AddressType;
}

export default CustomerType;
