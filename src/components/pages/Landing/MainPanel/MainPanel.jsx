import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import ReorderRoundedIcon from "@material-ui/icons/ReorderRounded";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./MainPanel.css";
import StoreCard from "../../../StoreCard/StoreCard.jsx";
import data from "../../../../data/data";
import {
  selectCurrentFunction,
  MessageData,
} from "../../../../reducers/actions/landing.action";
import { selectDisplayStorePos } from "../../../../reducers/actions/display.action";
import messageService from "../../../../services/message.service";
import StoreSelection from "./StoreSelection";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    // width: '100%',
    // display: 'block',
  },
  inputInput: {
    color: "inherit",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    // width: 'inherit',
    // display: 'block',
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function MainPanel() {
  const classes = useStyles();
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
      {/* Search bar */}
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <ReorderRoundedIcon />
        </div>
        <InputBase
          placeholder={currentDisplay.searchInputPlaceholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
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
