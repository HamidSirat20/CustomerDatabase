interface CustomerType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    id: number;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export default CustomerType;
