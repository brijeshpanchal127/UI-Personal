import React, { useState } from "react";
import "./PaymentOption.css";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListSubheader from "@material-ui/core/ListSubheader";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { traverse } from "@babel/core";
import CashPay from "../payment/Cash/CashPay";
import UsCash from "../payment/UsCash/UsCash";
import ReceiptOptions from "../payment/ReceiptOptions/ReceiptOptions";
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
  const [creditCardexpand, setCreditCardExpand] = React.useState(true);
  const [debitCradexpand, setdebitCardExpand] = React.useState(false);
  const [GiftCardexpand, setgiftCardExpand] = React.useState(false);
  const [applePayexpand, setApplePayExpand] = React.useState(false);
  const [cashexpand, setCashExpand] = React.useState(false);
  const [usCashdexpand, setUsCashExpand] = React.useState(false);
  const [receiptOptionexpand, setReceiptOptionExpand] = React.useState(false);
  const [open, setOpen] = React.useState(true);
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
