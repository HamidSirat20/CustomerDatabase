import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import config from "../../config";
import CustomerType from "../../types/CustomerType";

interface CustomersState {
  customers: CustomerType[];
  status: "success" | "loading" | "failed";
  isSuccess: boolean;
  error: string | null;
}
const initialState: CustomersState = {
  customers: [],
  status: "loading",
  isSuccess: false,
  error: null,
};

export const getAllCustomers = createAsyncThunk(
  "fetchAllCustomers",
  async (_, ThunkAPI) => {
    try {
      const result = await axios.get(`${config.baseUrl}/customers`);
      const data = await result.data;
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return ThunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getOneCustomerById = createAsyncThunk(
  "fetchACustomer",
  async (id: number, ThunkAPI) => {
    try {
      const result = await axios.get(`${config.baseUrl}/customers/${id}`);
      const data = await result.data;
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return ThunkAPI.rejectWithValue(err.message);
    }
  }
);

const customersSlice = createSlice({
  name: "customers",
  initialState: initialState,
  reducers: {
    createCustomer: (state, action: PayloadAction<CustomerType>) => {
      state.customers.push(action.payload);
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getAllCustomers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.status = "success";
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getAllCustomers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });

    build
      .addCase(getOneCustomerById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getOneCustomerById.fulfilled, (state, action) => {
        state.status = "success";
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getOneCustomerById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

const customersReducer = customersSlice.reducer;
export const { createCustomer } = customersSlice.actions;
export default customersReducer;