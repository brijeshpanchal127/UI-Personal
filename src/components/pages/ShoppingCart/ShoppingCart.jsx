import React, { useEffect } from "react";
import SideBar from '../Landing/SideBar/SideBar.jsx';
import ShoppingCartMainPanel from './ShoppingCartMainPanel/ShoppingCartMainPanel.jsx';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const ShoppingCart = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="landing">
      <SideBar className="sideBar" />
      <ShoppingCartMainPanel />
    </div>
  );
};

export default ShoppingCart;
