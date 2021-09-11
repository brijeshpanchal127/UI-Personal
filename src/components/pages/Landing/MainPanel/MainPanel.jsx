import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import StoreCard from "../../../StoreCard/StoreCard.jsx";
import {
  selectCurrentFunction,
  MessageData,
} from "../../../../reducers/actions/landing.action";
import { selectDisplayStorePos } from "../../../../reducers/actions/display.action";
import messageService from "../../../../services/message.service";
import StoreSelection from "./StoreSelection";
import data from "../../../../data/data";
export default function MainPanel() {
  const auth = useSelector((state) => state.login.auth);
  const currentDisplayProfile = useSelector(
    (state) => state.display.displayProfile
  );
  var currentDisplay = data.DISPLAY_PROFILE.find(
    (o) => o.name === currentDisplayProfile
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectPage = (e, functionality) => {
    e.preventDefault();
    dispatch(selectCurrentFunction(functionality.name));
    dispatch(selectDisplayStorePos(functionality.displayProfle));
    dispatch(messageService.getMessages(auth.accessToken));
    dispatch(MessageData("DISPLAY_MESSAGE"));
    history.push(functionality.url);
  };

  return (
    <div className="mainPanel">
      <div className={"search"}>
        <div className={"searchIcon"}>
          <i class="fas fa-bars"></i>
          {/* <ReorderRoundedIcon /> */}
        </div>
        <div className="MuiInputBase-root inputRoot">
          <input
            placeholder="Store"
            type="text"
            aria-label="search"
            class="MuiInputBase-input inputInput"
            value=""
          />
        </div>
      </div>
      <div className="panelContent">
        {(() => {
          switch (currentDisplay.name) {
            case "STORE_SELECTION":
              return <StoreSelection />;
            case "STORE_FUNCTIONALITIES": //<StoreCard text="OPEN POS" key="OPEN POS" onclick={() => {history.push("/shopping")}}/>;
              return (
                <div className="cardContainer">
                  {data["STORE_PROFILE_FUNCTIONALITIES"].map(
                    (functionality) => (
                      <StoreCard
                        text={functionality.name}
                        key={functionality.name}
                        onclick={(e) => {
                          redirectPage(e, functionality);
                        }}
                      />
                    )
                  )}
                </div>
              );
            default:
              return <div></div>;
          }
        })()}
      </div>
    </div>
  );
}
