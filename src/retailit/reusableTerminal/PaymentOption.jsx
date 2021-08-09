import React, { useState } from "react";
import "./PaymentOption.css";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Terminal from "./Terminal";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#72bb53",
    color: "white",
    marginTop: "1.5rem",
    fontSize: "15px",
    border: "none",
    height: "40px",
    padding: "10px 10px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#4c7a34",
    },
    width: "100%",
  },
  button_paymentbox: {
    marginTop: "20px",
  },
  button_payment: {
    backgroundColor: "#E9EDE5",
    color: "gray ",
    padding: "8px",
    marginTop: "8px",
    fontSize: "20px",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#4c7a34",
      color: "gray",
      textDecoration: "none",
    },
  },
}));

const PaymentOption = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalName, setModalName] = useState(null);
  // const preventDefault = (event) => event.preventDefault();

  const handleClick = (event, name) => {
    setAnchorEl(event.currentTarget);
    setModalName(name);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="paymentoption">
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography className={classes.typography}>
          <Terminal name={modalName} />
        </Typography>
      </Popover>
      <div className={classes.button_paymentbox}>
        <div
          className={classes.button_payment}
          onClick={(e) => handleClick(e, "creditCard")}
        >
          <Button aria-describedby={id}>CREDIT CARD</Button>
        </div>
        <div
          className={classes.button_payment}
          onClick={(e) => handleClick(e, "debitCard")}
        >
          <Button aria-describedby={id}>DEBIT CARD</Button>
        </div>

        <div
          className={classes.button_payment}
          onClick={(e) => handleClick(e, "GiftCard")}
        >
          <Button aria-describedby={id}>GIFT CARD</Button>
        </div>

        <div
          className={classes.button_payment}
          onClick={(e) => handleClick(e, "Apple Pay")}
        >
          <Button aria-describedby={id}>APPLE PAY</Button>
        </div>
        <div
          className={classes.button_payment}
          onClick={(e) => handleClick(e, "cash")}
        >
          <Button aria-describedby={id}>CASH</Button>
        </div>

        <div
          className={classes.button_payment}
          onClick={(e) => handleClick(e, "us cash")}
        >
          <Button aria-describedby={id}>US CASH</Button>
        </div>

        <div
          className={classes.button_payment}
          onClick={(e) => handleClick(e, "Receipt option")}
        >
          <Button aria-describedby={id}>RECEIPT OPTIONS</Button>
        </div>

        <button className={classes.button}>FINISH</button>
      </div>
    </div>
  );
};

export default PaymentOption;
