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
  submit_btn: {
    backgroundColor: "#72BB53",
    color: "#ffffff",
  },
  option_list: {
    padding: "10%",
  },
}));

const PaymentOption = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [value, setValue] = React.useState("terminal1");

  const checkOutOption =
    useSelector((state) => state.landing.storesData.checkOutOption) || [];

  const handleClick = (e, key) => {
    const script = document.createElement("script");
    script.src = "./plugins/payments/creditCard/creditCard.js";
    script.async = true;
    document.body.appendChild(script);
    document.head.appendChild(script);

    const debit = document.createElement("script");
    debit.src = "./plugins/payments/debitCard/debitCard.js";
    debit.async = true;
    document.body.appendChild(debit);
    document.head.appendChild(debit);

    const receipt = document.createElement("script");
    receipt.src = "./plugins/payments/receiptOptions/receiptOptions.js";
    receipt.async = true;
    document.body.appendChild(receipt);
    document.head.appendChild(receipt);

    const cash = document.createElement("script");
    cash.src = "/plugins/payments/cash/cash.js";
    cash.async = true;
    document.body.appendChild(cash);
    document.head.appendChild(cash);

    const usCash = document.createElement("script");
    usCash.src = "/plugins/payments/usCash/usCash.js";
    usCash.async = true;
    document.body.appendChild(usCash);
    document.head.appendChild(usCash);

    const giftCard = document.createElement("script");
    giftCard.src = "/plugins/payments/giftCard/giftCard.js";
    giftCard.async = true;
    document.body.appendChild(giftCard);
    document.head.appendChild(giftCard);

    const applePay = document.createElement("script");
    applePay.src = "/plugins/payments/applePay/applePay.js";
    applePay.async = true;
    document.body.appendChild(applePay);
    document.head.appendChild(applePay);

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
                    <div id={option.div_id} key={option.key}></div>
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