import React from "react";
import SideBar from "./SideBar/SideBar.jsx";
import MainPanel from "./MainPanel/MainPanel.jsx";
import "./Landing.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import landingService from "../../../services/landing.service";
import { selectDisplayStoreSelection, selectDisplayStoreFunctionalities } from "../../../reducers/actions/display.action";

const Landing = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.login.auth);
  const selectedStore = useSelector(state => state.landing.selectedStore);
  const currentStoreFunction = useSelector(state => state.landing.currentStoreFunction);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  if (isLoggedIn) {
    if (selectedStore === null) {
      dispatch(landingService.getStores(auth.accessToken));
      dispatch(selectDisplayStoreSelection("STORE_SELECTION"));
    }
    // else if (selectedStore !== null && currentStoreFunction === null) {
    // else {
    //   dispatch(selectDisplayStoreFunctionalities("STORE_FUNCTIONALITIES"));
    // }
  }
  else {
    return <Redirect to="/" />;
  }

  return (
    <div className="landing">
      <SideBar className="sideBar" />
      <MainPanel />  
    </div>
  );
};

export default Landing;
