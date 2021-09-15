import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreCard from "../../../StoreCard/StoreCard.jsx";
import { selectStore } from "../../../../reducers/actions/landing.action";
import { selectDisplayStoreFunctionalities } from "../../../../reducers/actions/display.action";

export default function StoreSelection() {
<<<<<<< HEAD
    const storeLocations = useSelector(
        (state) => state.landing.storesData.storeLocations
    );
    const dispatch = useDispatch();

    const selectLocation = (e) => {
        e.preventDefault();
        dispatch(selectStore(e.target.outerText));
        dispatch(selectDisplayStoreFunctionalities("STORE_FUNCTIONALITIES"));
    };

    return (
        <div className="cardContainer">
            {storeLocations?.map((location) => (
                <StoreCard text={location} key={location} onclick={selectLocation} />
            ))}
        </div>
    );
=======
  const storeLocations = useSelector(
    (state) => state.landing.storesData.storeLocations
  );
  const dispatch = useDispatch();

  const selectLocation = (e) => {
    e.preventDefault();
    dispatch(selectStore(e.target.outerText));
    dispatch(selectDisplayStoreFunctionalities("STORE_FUNCTIONALITIES"));
  };

  return (
    <div className="cardContainer">
      {storeLocations?.map((location) => (
        <StoreCard text={location} key={location} onclick={selectLocation} />
      ))}
    </div>
  );
>>>>>>> 4bb0934ab496d0942f0971344c453a9c35f43141
}
