import React, { useState, useEffect } from "react";
import "./PaymentOption.css";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AppleIcon from "@material-ui/icons/Apple";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import * as Icons from "@material-ui/icons/";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  // submit_btn: {
  //   backgroundColor: "#72BB53",
  //   color: "#ffffff",
  // },
  option_list: {

    padding: "5%",
  },
  item: {
    "& #amount_input": {
      margin: "0 0 0 4px",
      width: "25%",
    },
    "& #button_submit": {
      backgroundColor: "#72BB53",
      width: "105%",
      color: "#ffffff",
      padding: "4%",
      border: "none",
      borderRadious:"20px"
    },
    "& .radio_btn": { padding: "20%", margin: "2%" },
    "& .amount_div": { display: "flex", margin: "2%" },
    "& .teminal_label": { padding: "1px 10px 1px 1px", fontSize: "x-small" },
    "& .amount_label": {
      fontSize: "x-small",
      paddingTop: "4px",
      marginRight: "9px",
    },

  },
}));

const PaymentOption = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [value, setValue] = React.useState("terminal1");

  const checkOutOption =
    useSelector((state) => state.landing.storesData.checkOutOption) || [];

  const handleClick = (e, key) => {
    let scripts = [];

    checkOutOption.map((option) => {
      scripts.push(option.src);
    });

    scripts.forEach(function (url) {
      let script = document.createElement("script");
      script.src = url;
      script.async = false;
      document.body.appendChild(script);
    });

    if (selectedIndex === key) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(key);
    }
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {checkOutOption.map((option, index) => {
        return (
          <div>
            <div>
              <ListItem
                button
                key={option.key}
                onClick={(e) => handleClick(e, index)}
              >
                <ListItemText primary={option.text} />
                {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                key={option.key}
                in={index === selectedIndex}
                timeout="auto"
                unmountOnExit
              >
                <div className={classes.option_list}>

                  <div
                    id={option.div_id}
                    key={option.key}
                    className={classes.item}
                  ></div>

                </div>
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
