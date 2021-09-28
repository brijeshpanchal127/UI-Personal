import React, { useState, useEffect } from "react";
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

const Detail = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [terminalbox, setTerminalbox] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);
  const [albums, setAlbums] = useState([]);

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
  const onScan = (data) => {
    setBarcodeData(data);
    props.onScan(data);
  };
  return (
    <div className="detail">
      <div id="scandit-scancam-scanner-pane" />
      <div className={"iconsContainer"}>
        <div className="m-5">
          <i class="fa fa-file" aria-hidden="true"></i>
        </div>
        <div className="m-5">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>
        <div className="m-5">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
      <div className={"list"}>TRANS #</div>
      <div className="detail__list">
        <div className="d-flex item_content">
          <div className={"list"}>SUBTOTAL</div>
          <div>29.99</div>
        </div>
        <div className="d-flex item_content">
          <div className={"list"}>DISC</div>
          <div>9.99</div>
        </div>
        <div className="d-flex item_content">
          <div className={"list"}>GIFT CARD</div> <div>9.99</div>
        </div>
        <div className="d-flex item_content">
          <div className={"list"}>HST</div>
          <div>3.90</div>
        </div>
      </div>
      <div className="d-flex item_content">
        <div className={"balance"}>BALANCE</div>
        <div>
          <h3>33.89</h3>
        </div>
      </div>
      <button className={"checkout_button"} onClick={handleClick}>
        {console.log(props)}
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
