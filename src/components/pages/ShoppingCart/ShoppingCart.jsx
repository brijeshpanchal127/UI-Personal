import React, { useEffect } from "react";
// import MainPanel from "./MainPanel/MainPanel.jsx";
import SideBar from '../Landing/SideBar/SideBar.jsx';
import ShoppingCartMainPanel from './ShoppingCartMainPanel/ShoppingCartMainPanel.jsx';
import {
  cacheStoresData
} from "../../../reducers/actions/landing.action";
import landingService from "../../../services/landing.service";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { selectCurrentFunction } from "../../../reducers/actions/landing.action";
import { selectDisplayStoreSelection, selectDisplayStorePos } from "../../../reducers/actions/display.action";

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.login.auth);
  const selectedStore = useSelector(state => state.landing.selectedStore);
  const currentStoreFunction = useSelector(state => state.landing.currentStoreFunction);

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  if (!isLoggedIn) {
    console.log("/shopping: redirecting to /");
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
