import React, { useState } from "react";
import "./Detail.css";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PaymentOption from "../../../../retailit/reusableTerminal/PaymentOption";

const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: "0.5rem",
    fontSize: "12px",
    color: "grey",
  },
  balance: {
    color: "grey",
    fontWeight: "bold",
    marginTop: "1rem",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#72BB53",
    color: "white",
    marginTop: "1.5rem",
    fontSize: "15px",
    border: "none",
    height: "2rem",
    borderRadius: "5px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#4c7a34",
    },
    width: "100%",
  },
  iconsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Detail = () => {
  const classes = useStyles();
  const [terminalbox, setTerminalbox] = useState(false);
  const terminalboxHandler = () => {
    setTerminalbox({ terminalbox: true });
  };

  return (
    <div className="detail">
      <div className={classes.iconsContainer}>
        <DescriptionIcon />
        <DeleteForeverIcon />
        <MoreVertIcon />
      </div>
      <div className={classes.list}>TRANS #</div>
      <div className="detail__list">
        <div className={classes.list}>SUBTOTAL</div>
        <div className={classes.list}>DISC</div>
        <div className={classes.list}>GIFT CARD</div>
        <div className={classes.list}>HST</div>
      </div>
      <div className={classes.balance}>BALANCE</div>
      <button className={classes.button} onClick={terminalboxHandler}>
        CHECKOUT
      </button>
      {terminalbox ? <PaymentOption /> : ""}
    </div>
  );
};

export default Detail;
