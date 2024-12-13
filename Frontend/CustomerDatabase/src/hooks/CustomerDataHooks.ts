import axios from "axios";
import config from "../config";
import CustomerType from "../types/CustomerType";
import { useEffect, useState } from "react";

const useFetchCustomers = (): CustomerType[] => {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  const URLBase = config.baseUrl;

  useEffect(() => {
    const fetchCustomers = async () => {
      const result = await axios.get(`${URLBase}/customers`);
      const data: CustomerType[] = await result.data;
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  return customers;
};

export default useFetchCustomers;
