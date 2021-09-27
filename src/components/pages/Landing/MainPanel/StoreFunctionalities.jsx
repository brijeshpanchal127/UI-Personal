import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import StoreCard from "../../../StoreCard/StoreCard.jsx";
import { selectCurrentFunction } from "../../../../reducers/actions/landing.action";
import { selectDisplayStorePos } from "../../../../reducers/actions/display.action";
import data from "../../../../data/data";

export default function StoreFunctionalities() {
  //const storeLocations = useSelector((state) => state.landing.storesData.storeLocations);
  const dispatch = useDispatch();

  const redirectPage = (e, functionality) => {
    e.preventDefault();
    dispatch(selectCurrentFunction(functionality.name));
    dispatch(selectDisplayStorePos(functionality.displayProfle));

    console.log("switch block");
    console.log(functionality.name);
    switch (functionality.name) {
      case "OPEN POS":
        console.log("redirect to open pos page");
        <Route exact path="/shopping" />;
        break;
      case "START/STOP SHIFT":
        return <Redirect to="/shift" />;
      case "STORE ADMIN":
        return <Redirect to="/admin" />;
      default:
        return <div></div>;
    }
  };
  return (
    <div className="cardContainer">
      {data["STORE_PROFILE_FUNCTIONALITIES"].map((functionality) => (
        <StoreCard
          text={functionality.name}
          key={functionality.name}
          onclick={(e) => {
            redirectPage(e, functionality);
          }}
        />
      ))}
    </div>
  );
}
