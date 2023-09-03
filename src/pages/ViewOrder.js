import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getOrderByUser } from "../features/auth/authSlice";

const ViewOrder = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderByUser(userId));
  }, []);
  const orderState = useSelector((state) => state.auth?.orders);

  // console.log(orderState);

  return (
    <div>
      <h3 className="mb-4 title">View Order</h3>
      <div>hi</div>
    </div>
  );
};

export default ViewOrder;
