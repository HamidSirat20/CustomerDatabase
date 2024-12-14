import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CustomerType from "../../types/CustomerType";
import axios, { AxiosError } from "axios";
import config from "../../config";
import { copyWithStructuralSharing } from "@reduxjs/toolkit/query";
import { act } from "react";

const initialState: CustomerType[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: {
      id: 101,
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zipCode: "62704",
      country: "USA",
    },
  },
];

export const getAllCustomers = createAsyncThunk(
  "fetchAllCustomers",
  async () => {
    try {
      const result = await axios.get(`${config.baseUrl}/customers`);
      const data = await result.data;
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.request) {
        console.log("request error!", err.request);
      } else {
        console.log(err.response?.data);
      }
    }
  }
);
const customersSlice = createSlice({
  name: "customers",
  initialState: initialState,
  reducers: {
    createCustomer: (state, action: PayloadAction<CustomerType>) => {
      state.push(action.payload);
    },
    updateCustomers: (state, action: PayloadAction<CustomerType[]>) => {
      return action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(getAllCustomers.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload;
      }
    });
  },
});

const customersReducer = customersSlice.reducer;
export const { createCustomer } = customersSlice.actions;
export default customersReducer;
