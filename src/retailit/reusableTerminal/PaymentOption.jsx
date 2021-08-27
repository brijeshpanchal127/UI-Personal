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
}));

const PaymentOption = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [value, setValue] = React.useState("terminal1");

  useEffect(() => {
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
    receipt.src =
      "./plugins/payments/receiptOption/receiptOption.js";
    receipt.async = true;
    document.body.appendChild(receipt);
    document.head.appendChild(receipt);

    const cash = document.createElement("script");
    cash.src = "/plugins/payments/cash/cash.js";
    cash.async = true;
    document.body.appendChild(cash);

    const usCash = document.createElement("script");
    usCash.src = "/plugins/payments/usCash/usCash.js";
    usCash.async = true;
    document.body.appendChild(usCash);

    const applePay = document.createElement("script");
    applePay.src =
      process.env.PUBLIC_URL + "/plugins/payments/applePay/applePay.js";
    applePay.async = true;
    document.body.appendChild(applePay);
  }, []);

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

  // const onSubmitClick = () => {
  //   alert("payment");
  // };

  return (
    <div>
      <div> Creditcard

        <div id="creditcardOption"></div>
      </div>
      <div>Debitcard
        <div id="debitCardOption" ></div>
      </div>
      <div>apple Pay

        <div id="applePay" ></div>
      </div>

      <div>giftcard
        <div id="giftcard" ></div>
      </div>

      <div>cash


        <div id="cash" ></div>
      </div>

      <div>us cash

        <div id="uscash" ></div>
      </div>

      <div> receipt
        <div id="receipt" ></div>
      </div>

    </div>
    // <List component="nav" aria-labelledby="nested-list-subheader">
    //   {checkOutOption.map((option, index) => {
    //     let listIcon;
    //     let checkOption;
    //     switch (option.icon) {
    //       case "CreditCardIcon":
    //         listIcon = <CreditCardIcon />;
    //         break;
    //       case "APPLE":
    //         listIcon = <AppleIcon />;
    //         break;
    //       case "CardGiftcardIcon":
    //         listIcon = <CardGiftcardIcon />;
    //         break;
    //       case "AttachMoneyIcon":
    //         listIcon = <AttachMoneyIcon />;
    //         break;
    //       case "MonetizationOnIcon":
    //         listIcon = <MonetizationOnIcon />;
    //         break;
    //       case "ReceiptIcon":
    //         listIcon = <ReceiptIcon />;
    //         break;
    //       default:
    //         listIcon = null;
    //         break;
    //     }
    //     switch (option.type) {
    //       case "CREDIT CARD":
    //         checkOption = (
    //           <div id="creditcardOption" key={option.key}></div>
    //         );
    //         break;
    //       case "DEBIT CARD":
    //         checkOption = <div id="debitCardOption" key={option.key}></div>;
    //         break;
    //       case "APPLE PAY":
    //         checkOption = <div id="applePay" key={option.key}></div>;
    //         break;
    //       case "GIFT CARD":
    //         checkOption = <div id="giftcard" key={option.key}></div>;
    //         break;
    //       case "CASH":
    //         checkOption = <div id="cash" key={option.key}></div>;
    //         break;
    //       case "US CASH":
    //         checkOption = <div id="uscash" key={option.key}></div>;
    //         break;
    //       case "RECEIPT OPTION":
    //         checkOption = <div id="uscash" key={option.key}></div>;
    //         break;
    //       default:
    //         checkOption = null;
    //         break;
    //     }

    //     return (
    //       <div>
    //         <div>
    //           <ListItem
    //             button
    //             key={option.key}
    //             onClick={(e) => handleClick(e, index)}
    //           >
    //             <ListItemIcon>{listIcon}</ListItemIcon>
    //             <ListItemText primary={option.text} />
    //             {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
    //           </ListItem>
    //           <Collapse
    //             key={option.key}
    //             in={index === selectedIndex}
    //             timeout="auto"
    //             unmountOnExit
    //           >
    //             {checkOption}
    //           </Collapse>
    //           <Divider />
    //         </div>
    //       </div>
    //     );
    //   })}
    // </List>

  );
};

export default PaymentOption;
