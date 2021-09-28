import React, { useEffect, useState } from "react";
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
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import ArrowDropDown from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUp from '@material-ui/icons/ArrowDropUpOutlined'
import moment from "moment";

import {
  selectCurrentFunction,
  selectStore,
} from "../../../../reducers/actions/landing.action";
import { useHistory } from "react-router-dom";

export default function SideBar() {
  const [openCollapse, setCollapse] = React.useState(false);
  const [key, setKey] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [size, setSize] = useState();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setSize(window.innerWidth);
    window.innerWidth < 769 && setOpen(false);
  }, []);

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSidebarClick = () => {
    setOpen(!open);
  };

  const selectedStore = useSelector((state) => state.landing.selectedStore);
  const sidebar =
    useSelector((state) => state.landing.storesData.sidebar) || [];
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e, type, key) => {
    setKey(key);
    type.key === key && setCollapse(!openCollapse);
  };
  const switchStore = (e) => {
    dispatch(selectStore(null));
    dispatch(selectCurrentFunction(null));

    e.preventDefault();
    history.push("/landing");
    //return <Redirect to="/landing" />;
  };

  return open ? (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div>
          <ListSubheader component="div" id="nested-list-subheader">
            <div className="d-flex">
              <div> QPOS</div>
              <div className="pl">
                <i
                  class="fas fa-bars"
                  id="btn"
                  onClick={handleSidebarClick}
                ></i>
              </div>
            </div>
          </ListSubheader>
        </div>
      }
      className={"nested_list_sidebar"}
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
      {/* <div
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
      </div> */}

      {/* Promos */}
      {/* <div
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
      </div> */}

      {sidebar.map(function (sidebarItems, idx) {
        let sidebarIcon;
        switch (sidebarItems.icon) {
          case "ExitToAppIcon":
            sidebarIcon = <ExitToAppIcon />;
            break;
          case "CardGiftcardIcon":
            sidebarIcon = <CardGiftcardIcon />;
            break;
          case "MessageIcon":
            sidebarIcon = <MessageOutlinedIcon />;
            break;
          case "SettingsIcon":
            sidebarIcon = <SettingsApplicationsIcon />;
            break;
          case "LocationOnIcon":
            sidebarIcon = <LocationOnIcon />;
            break;
          default:
            sidebarIcon = null;
            break;
        }

        return (
          <div>
            <ListItem button onClick={(e) => handleClick(e, sidebarItems, idx)}>
            {openCollapse && key === idx ? (
                <ArrowDropUp />
              ) : (
                <ArrowDropDown />
              )}
              <ListItemIcon>{sidebarIcon}</ListItemIcon>
              <ListItemText primary={sidebarItems.text} key={idx} />
              {sidebarItems.type === "MESSAGES" && (
                <div>{sidebar[2]["sublist"].length}</div>
              )}
              {sidebarItems.type === "PROMOS" && (
                <div>
                  <div>
                    <MoreVertIcon onClick={handleToggle} /><span>{sidebar[1]["sublist"].length}</span>
                    
                    
                  </div>
                  <div>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          backgroundColor: "#72BB53",
                          marginTop: "36px",
                          marginRight: "20px",
                          color: "#ffffff",
                        },
                      }}
                    >
                      {sidebarItems.menu.length > 0 &&
                        sidebarItems.menu.map((item) => {
                          return (
                            <div>
                              <MenuItem
                                onClick={() => {
                                  alert("Will implemented it in future");
                                }}
                              >
                                {item.text}
                              </MenuItem>
                            </div>
                          );
                        })}
                    </Menu>
                  </div>
                </div>
              )}
              {/* {openCollapse && key === idx ? <ExpandLess /> : <ExpandMore />} */}
            </ListItem>
            <Collapse
              in={openCollapse && key === idx}
              timeout="auto"
              unmountOnExit
            >
              <List component="div">
                {sidebarItems.sublist &&
                  sidebarItems.sublist.map((item, index) => {
                    let sublistIcon;
                    switch (item.icon) {
                      case "LocationOnIcon":
                        sublistIcon = <LocationOnIcon />;
                        break;
                      default:
                        sublistIcon = null;
                        break;
                    }

                    return selectedStore !== null ? (
                      <ListItem
                        button
                        className={"nested"}
                        onClick={item.type === "SWITCH STORE" && switchStore}
                      >
                        <ListItemIcon>{sublistIcon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        {sidebarItems.type === "MESSAGES" && (
                          <div>
                            {moment().format("hh:mm a")} <MoreVertIcon />
                          </div>
                        )}
                        {sidebarItems.type === "PROMOS" && (
                          <div>
                            <MoreVertIcon onClick={handleToggle} />
                          </div>
                        )}
                      </ListItem>
                    ) : (
                      item.type !== "SWITCH STORE" && (
                        <ListItem button className={"nested"}>
                          <ListItemText primary={item.text} />
                          {sidebarItems.type === "MESSAGES" && (
                            <div>
                              {moment().format("hh:mm a")} <MoreVertIcon />
                            </div>
                          )}
                          {sidebarItems.type === "PROMOS" && <MoreVertIcon />}
                        </ListItem>
                      )
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
  ) : (
    <List
      component="nav"
      className="collapsed_sidebar"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div>
          <ListSubheader component="div" id="nested-list-subheader">
            <div className="m10 p10">
              <i class="fas fa-times" id="btn" onClick={handleSidebarClick}></i>
            </div>
          </ListSubheader>
        </div>
      }
    >
      {sidebar.map(function (sidebarItems, idx) {
        let sidebarIcon;
        switch (sidebarItems.icon) {
          case "ExitToAppIcon":
            sidebarIcon = <ExitToAppIcon />;
            break;
          case "CardGiftcardIcon":
            sidebarIcon = <CardGiftcardIcon />;
            break;
          case "MessageIcon":
            sidebarIcon = <MessageOutlinedIcon />;
            break;
          case "SettingsIcon":
            sidebarIcon = <SettingsApplicationsIcon />;
            break;
          case "LocationOnIcon":
            sidebarIcon = <LocationOnIcon />;
            break;
          default:
            sidebarIcon = null;
            break;
        }

        return (
          <div>
            <ListItem button onClick={(e) => handleClick(e, sidebarItems, idx)}>
              <ListItemIcon>{sidebarIcon}</ListItemIcon>
            </ListItem>
          </div>
        );
      })}
      )
    </List>
      );
    }
