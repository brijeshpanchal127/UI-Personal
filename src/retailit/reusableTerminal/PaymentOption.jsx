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
import { traverse } from "@babel/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const PaymentOption = (props) => {
  const [expand, setExpand] = React.useState(true);
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
    setExpand(key);
  };

  return (
    <div className={classes.root}>
      {tabs.map((tab) => (
        <div>
          <Accordion
            onClick={(e) => handleClick(e, tab.id)}
            expanded={expand === tab.id}
            defaultExpanded={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{tab.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{tab.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}

      {/* <Accordion>
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
      <Accordion expand>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Cash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ApplePay />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>Receipt Option</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <GiftCard />
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};

export default PaymentOption;
