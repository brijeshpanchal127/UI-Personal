import React, { useState, useEffect } from "react";
import "./Detail.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PaymentOption from "../../../../retailit/reusableTerminal/PaymentOption";
import CaptureCode from "../CaptureCode/CaptureCode";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [terminalbox, setTerminalbox] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // axios
    //   .get("./data.js")
    //   .then((res) => setAlbums(res.data))
    //   .catch((err) => console.log(err));

    axios("./data.js")
      .then((response) => {
        console.log(response);
        // return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        console.log(data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, []);

  const terminalboxHandler = () => {
    setTerminalbox({ terminalbox: true });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="detail">

<div> 

<CaptureCode />
</div>
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
      <button className={classes.button} onClick={handleClick}>
        <a> CHECKOUT</a>
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "top",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        style={{
          marginTop: "-8%",
        }}
      >
      
        {/* <Typography className={classes.typography}> */}
        <PaymentOption />
        {/* </Typography> */}
      </Popover>
    </div>
  );
};

export default Detail;
