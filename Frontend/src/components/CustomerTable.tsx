import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteCustomer,
  getAllCustomers,
} from "../redux/reducers/customersReducer";
import {
  useCustomDispatch,
  useCustomSelector,
} from "../hooks/useCustomSelector";
import LoadingStatus from "./LoadingStatus";
import CustomerGrid from "./CustomerGrid";

const CustomerTable = () => {
  const dispatch = useCustomDispatch();
  const nav = useNavigate();

  const { customers, status, error, isSuccess } = useCustomSelector(
    (state) => state.customersReducer
  );

  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  const HandleDelete = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    dispatch(deleteCustomer(id));
  };

  if (!isSuccess) {
    return <LoadingStatus status={status}></LoadingStatus>;
  }

  return (
    <>
      <CustomerGrid customers={customers} actions={HandleDelete} nav={nav} />
    </>
  );
};

export default CustomerTable;
