import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import config from "../../config";
import CustomerType from "../../types/CustomerType";
import CustomerCreateEditType from "../../types/CustomerCreateEditType";

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

export interface EditCustomerType {
  id: number;
  customer: CustomerCreateEditType;
}

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

export const deleteCustomer = createAsyncThunk<
  { id: number },
  number,
  { rejectValue: string }
>("deleteCustomer", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${config.baseUrl}/customers/${id}`);
    return { id };
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.message);
  }
});

export const createCustomer = createAsyncThunk(
  "createCustomer",
  async (customer: CustomerCreateEditType, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${config.baseUrl}/customers`,
        customer
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const editCustomer = createAsyncThunk(
  "editCustomer",
  async (editCustomer: EditCustomerType, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${config.baseUrl}/customers/${editCustomer.id}`,
        editCustomer.customer
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

const customersSlice = createSlice({
  name: "customers",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      //get all
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
      })
      //get one
      .addCase(getOneCustomerById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getOneCustomerById.fulfilled, (state, action) => {
        state.status = "success";
        state.isSuccess = true;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.customers = [action.payload];
        }
      })
      .addCase(getOneCustomerById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      //delete customer

      .addCase(deleteCustomer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.status = "success";
        state.isSuccess = true;
        state.customers = state.customers.filter(
          (customer) => customer.id !== action.payload.id
        );
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      //create customer
      .addCase(createCustomer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.status = "success";
        state.isSuccess = true;
        state.customers = [...state.customers, action.payload];
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      //edit customer
      .addCase(editCustomer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(editCustomer.fulfilled, (state, action) => {
        state.status = "success";
        state.isSuccess = true;
        const index = state.customers.findIndex(
          (customer) => customer.id === action.payload.id
        );
        if (index !== -1) {
          state.customers[index] = action.payload;
        }
      })
      .addCase(editCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

const customersReducer = customersSlice.reducer;
export const {} = customersSlice.actions;
export default customersReducer;
