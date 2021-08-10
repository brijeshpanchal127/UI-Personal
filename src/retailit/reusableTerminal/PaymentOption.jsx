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
  const [expand, setExpand] = React.useState(true);
  const classes = useStyles();

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expand}>
        <AccordionSummary
          onClick={handleClick}
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
      <Accordion>
        <AccordionSummary
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
          id="panel1a-header"
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
          id="panel2a-header"
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
          id="panel1a-header"
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
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Receipt Option</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <GiftCard />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentOption;
