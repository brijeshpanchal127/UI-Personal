import React, { useState } from "react";
import "./PaymentOption.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreditCard from "../payment/CreditCard/CreditCard";
import DebitCard from "../payment/DebitCard/DebitCard";
import ApplePay from "../payment/ApplePay/ApplePay";
import GiftCard from "../payment/GiftCard/GiftCard";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const PaymentOption = (props) => {
  const [creditCardexpand, setCreditCardExpand] = React.useState(true);
  const [debitCradexpand, setdebitCardExpand] = React.useState(false);
  const [GiftCardexpand, setgiftCardExpand] = React.useState(false);
  const [applePayexpand, setApplePayExpand] = React.useState(false);
  const [cashexpand, setCashExpand] = React.useState(false);
  const [usCashdexpand, setUsCashExpand] = React.useState(false);
  const [receiptOptionexpand, setReceiptOptionExpand] = React.useState(false);

  const classes = useStyles();
  const tabs = [
    { id: 1, label: "CREDIT CARD", description: <CreditCard />, expand: true },
    { id: 2, label: "DEBIT CARD", description: <DebitCard />, expand: false },
    { id: 3, label: "APPLE PAY", description: <ApplePay />, expand: false },
    { id: 4, label: "GIFT CARD", description: <GiftCard />, expand: false },
    { id: 5, label: "CASH", description: "cash", expand: false },
    { id: 6, label: "US CASH", description: "us cash", expand: false },
    {
      id: 7,
      label: "RECEIPT OPTIONS",
      description: "receipt option",
      expand: false,
    },
  ];

  const handleClick = (event, key) => {
    debugger;
    switch (key) {
      case "panel1a-header":
        setdebitCardExpand(false);
        setReceiptOptionExpand(false);
        setgiftCardExpand(false);
        setApplePayExpand(false);
        setCashExpand(false);
        setUsCashExpand(false);
        setCreditCardExpand(!creditCardexpand);
        break;
      case "panel2a-header":
        setdebitCardExpand(!debitCradexpand);
        setReceiptOptionExpand(false);
        setgiftCardExpand(false);
        setApplePayExpand(false);
        setCashExpand(false);
        setUsCashExpand(false);
        setCreditCardExpand(false);
        break;
      case "panel3a-header":
        setApplePayExpand(!applePayexpand);
        setdebitCardExpand(false);
        setReceiptOptionExpand(false);
        setgiftCardExpand(false);
        setCashExpand(false);
        setUsCashExpand(false);
        setCreditCardExpand(false);
        break;
      case "panel4a-header":
        setApplePayExpand(false);
        setdebitCardExpand(false);
        setReceiptOptionExpand(false);
        setgiftCardExpand(!GiftCardexpand);
        setCashExpand(false);
        setUsCashExpand(false);
        setCreditCardExpand(false);
        break;
      case "panel5a-header":
        setApplePayExpand(false);
        setdebitCardExpand(false);
        setReceiptOptionExpand(false);
        setgiftCardExpand(false);
        setCashExpand(!cashexpand);
        setUsCashExpand(false);
        setCreditCardExpand(false);
        break;
      case "panel6a-header":
        setApplePayExpand(false);
        setdebitCardExpand(false);
        setReceiptOptionExpand(false);
        setgiftCardExpand(false);
        setCashExpand(false);
        setUsCashExpand(!usCashdexpand);
        setCreditCardExpand(false);
        break;
      case "panel7a-header":
        setApplePayExpand(false);
        setdebitCardExpand(false);
        setReceiptOptionExpand(!receiptOptionexpand);
        setgiftCardExpand(false);
        setCashExpand(false);
        setUsCashExpand(false);
        setCreditCardExpand(false);
        break;
      default:
        setApplePayExpand(false);
        setdebitCardExpand(false);
        setReceiptOptionExpand(false);
        setgiftCardExpand(false);
        setCashExpand(false);
        setUsCashExpand(false);
        setCreditCardExpand(false);
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={creditCardexpand}>
        <AccordionSummary
          onClick={(e) => handleClick(e, "panel1a-header")}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Credit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <CreditCard />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={debitCradexpand}>
        <AccordionSummary
          onClick={(e) => handleClick(e, "panel2a-header")}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Debit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <DebitCard />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={applePayexpand}>
        <AccordionSummary
          onClick={(e) => handleClick(e, "panel3a-header")}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Apple Pay</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ApplePay />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={GiftCardexpand}>
        <AccordionSummary
          onClick={(e) => handleClick(e, "panel4a-header")}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Gift Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <GiftCard />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={cashexpand}>
        <AccordionSummary
          onClick={(e) => handleClick(e, "panel5a-header")}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Cash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>cash</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={usCashdexpand}>
        <AccordionSummary
          onClick={(e) => handleClick(e, "panel6a-header")}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>Us Cash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>us Cash</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={receiptOptionexpand}>
        <AccordionSummary
          onClick={(e) => handleClick(e, "panel7a-header")}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading}>Receipt option </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>receipt option </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentOption;
