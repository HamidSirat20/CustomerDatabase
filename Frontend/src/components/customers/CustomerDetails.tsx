import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import {
  useCustomDispatch,
  useCustomSelector,
} from "../../hooks/useCustomSelector";
import LoadingStatus from "../common/LoadingStatus";
import {
  deleteCustomer,
  getOneCustomerById,
} from "../../redux/reducers/customersReducer";
import defaultImage from "../common/defaultPhoto";
import DetailGrid from "../common/DetailGrid";

const CustomerDetails = () => {
  const { id } = useParams();
  const dispatch = useCustomDispatch();
  const nav = useNavigate();

  const { customers, status, error } = useCustomSelector(
    (state) => state.customersReducer
  );

  const customerId = id ? parseInt(id) : null;

  useEffect(() => {
    if (customerId) {
      dispatch(getOneCustomerById(customerId));
    }
  }, [dispatch, customerId]);

  const HandleDelete = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    dispatch(deleteCustomer(id));
    nav("/");
  };

  if (status === "loading") return <LoadingStatus status="loading" />;
  if (!customers || customers.length === 0)
    return (
      <div className="alert alert-warning text-center">
        No customer data found!
      </div>
    );

  const customer = customers[0];

  return (
    <>
      <DetailGrid
        customers={customers}
        actions={HandleDelete}
        buttonName="Delete"
        tableTile="Customers Details"
      />
    </>
  );
};

export default CustomerDetails;
