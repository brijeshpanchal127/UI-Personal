import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import StoreCard from '../../../StoreCard/StoreCard.jsx';
import { selectStore } from "../../../../reducers/actions/landing.action";
import { selectDisplayStoreFunctionalities } from "../../../../reducers/actions/display.action";
import './MainPanel.css';

export default function StoreSelection() {
    const storeLocations = useSelector((state) => state.landing.storesData.storeLocations);
    const dispatch = useDispatch();

    const selectLocation = (e) => {
        e.preventDefault();
        dispatch(selectStore(e.target.outerText));
        dispatch(selectDisplayStoreFunctionalities("STORE_FUNCTIONALITIES"));
        //window.location.reload();
    }

    return (
        <div className="cardContainer">
            {
                storeLocations?.map(location => <StoreCard text={location} key={location} onclick={selectLocation} />)
            }
        </div>
    );
}