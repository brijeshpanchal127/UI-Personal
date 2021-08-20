import React, { useState } from "react";
import "./PaymentOption.css";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AppleIcon from "@material-ui/icons/Apple";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Terminal from "./Terminal";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  submit_btn: {
    backgroundColor: "#72BB53",
    color: "#ffffff",
  },
}));

const PaymentOption = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [value, setValue] = React.useState("terminal1");

  const checkOutOption =
    useSelector((state) => state.landing.storesData.checkOutOption) || [];

  const onRadioChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = (e, key) => {
    if (selectedIndex === key) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(key);
    }
  };

  const onSubmitClick = () => {
    alert("payment");
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {checkOutOption.map((option, index) => {
        let listIcon;
        switch (option.icon) {
          case "CreditCardIcon":
            listIcon = <CreditCardIcon />;
            break;
          case "APPLE":
            listIcon = <AppleIcon />;
            break;
          case "CardGiftcardIcon":
            listIcon = <CardGiftcardIcon />;
            break;
          case "AttachMoneyIcon":
            listIcon = <AttachMoneyIcon />;
            break;
          case "MonetizationOnIcon":
            listIcon = <MonetizationOnIcon />;
            break;
          case "ReceiptIcon":
            listIcon = <ReceiptIcon />;
            break;
          default:
            listIcon = null;
            break;
        }

        return (
          <div>
            <div>
              <ListItem
                button
                key={option.key}
                onClick={(e) => handleClick(e, index)}
              >
                <ListItemIcon>{listIcon}</ListItemIcon>
                <ListItemText primary={option.text} />
                {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                key={option.key}
                in={index === selectedIndex}
                timeout="auto"
                unmountOnExit
              >
                <Terminal />
              </Collapse>
              <Divider />
            </div>
          </div>
        );
      })}
    </List>
  );
};

export default PaymentOption;
