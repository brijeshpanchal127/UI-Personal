import React, { useEffect } from "react";
import "./SideBar.css";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SettingsIcon from "@material-ui/icons/Settings";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import data from "../../../../data/data";
import {
  selectCurrentFunction,
  selectStore,
  MessageData,
} from "../../../../reducers/actions/landing.action";
import messageService from "../../../../services/message.service";
import { Redirect, useHistory } from "react-router-dom";
import { CompassCalibrationOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "lightgrey",
    height: "100vh",
    overflowY: "scroll",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [openShortcuts, setOpenShortcuts] = React.useState(true);
  const [openPromos, setOpenPromos] = React.useState(true);
  const [openMessages, setOpenMessages] = React.useState(true);
  const [openSettings, setOpenSettings] = React.useState(true);

  const selectedStore = useSelector((state) => state.landing.selectedStore);
  const displayProfileName = useSelector(
    (state) => state.display.displayProfile
  );

  var currentDisplayProfile = data.DISPLAY_PROFILE.find(
    (o) => o.name === displayProfileName
  );
  const storeLocations = useSelector(
    (state) => state.landing.storesData.storeLocations
  );
  const sidebar =
    useSelector((state) => state.landing.storesData.sidebar) || [];
  console.log("storeLocations.....................", storeLocations);
  console.log("sidebar.....................", sidebar);
  const message = useSelector((state) => state.landing.messages);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.login.auth);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const history = useHistory();

  useEffect(() => {
    dispatch(messageService.getMessages(auth.accessToken));
  }, []);

  const handleShortcutsClick = () => {
    setOpenShortcuts(!openShortcuts);
  };
  const handlePromosClick = () => {
    setOpenPromos(!openPromos);
  };
  const handleMessagesClick = () => {
    debugger;
    setOpenMessages(!openMessages);
  };
  const handleClick = (e, type) => {
    debugger;
    switch (type) {
      case "SHORTCUTS":
        setOpenShortcuts(!openShortcuts);
        break;
      case "PROMOS":
        setOpenPromos(!openPromos);
        break;
      case "MESSAGES":
        setOpenMessages(!openMessages);
        break;
      case "MESSAGES":
        setOpenSettings(!openSettings);
        break;
      default:
        break;
    }
    setOpenSettings(!openSettings);
  };
  const switchStore = (e) => {
    dispatch(selectStore(null));
    dispatch(selectCurrentFunction(null));

    e.preventDefault();
    history.push("/landing");
    //return <Redirect to="/landing" />;
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          QPOS
        </ListSubheader>
      }
      className={classes.root}
    >
      {/* {storesData.storeProfile[currentStoreFunction]?.map((sidebarItem) => (
        <ListItem button>
          <ListItemIcon>
            {sidebarItem.type === "promos" ? (
              <CardGiftcardIcon />
            ) : (
              <ExitToAppIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={sidebarItem.text} />
        </ListItem>
      ))} */}

      {/* Shortcuts */}
      <div
        className={
          currentDisplayProfile.sideBarFunctionalities.includes("SHORTCUTS")
            ? ""
            : "hidden"
        }
      >
        <ListItem button onClick={handleShortcutsClick}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="SHORTCUTS" />
          {openShortcuts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openShortcuts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding></List>
        </Collapse>
      </div>

      {/* Promos */}
      <div
        className={
          currentDisplayProfile.sideBarFunctionalities.includes("PROMOS")
            ? ""
            : "hidden"
        }
      >
        <ListItem button onClick={handlePromosClick}>
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="PROMOS" />
          {openPromos ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openPromos} timeout="auto" unmountOnExit>
          <List component="div" disablePadding></List>
        </Collapse>
      </div>

      {sidebar.map(function (sidebarItems, idx) {
        return (
          <div>
            <ListItem button onClick={(e) => handleClick(e, sidebarItems.type)}>
              <ListItemText primary={sidebarItems.text} key={idx} />
              {openShortcuts ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSettings}>
              <List component="div">
                {sidebarItems.sublist &&
                  sidebarItems.sublist.map((item, index) => {
                    return (
                      <ListItem button className={classes.nested}>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    );
                  })}
              </List>
            </Collapse>
          </div>
        );
      })}

      {/* Messages */}
       {/* <ListItem button onClick={handleMessagesClick}>
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="MESSAGES" />
        {openMessages ? <ExpandLess /> : <ExpandMore />}
      </ListItem>  */}

      {/* <Collapse in={openMessages} timeout="auto" unmountOnExit>
        {message &&
          message.map((item) => {
            return (
              <ListItem button className={classes.nested}>
                <ListItemText primary={item} />
                <ListItemIcon>
                  <MoreVertIcon />
                </ListItemIcon>
              </ListItem>
            );
          })}
      </Collapse> */}

      {/* Settings */}
      {/* <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="SETTINGS" />
        {openSettings ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openSettings} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {selectedStore !== null ? (
            <ListItem button className={classes.nested} onClick={switchStore}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Switch Store" />
            </ListItem>
          ) : null}
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */}
    </List>
  );
}
