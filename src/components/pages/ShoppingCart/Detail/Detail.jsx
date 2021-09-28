import React, { useState, useEffect } from "react";
import axios from "axios";
import Popover from "@material-ui/core/Popover";
import PaymentOption from "../../../../retailit/reusableTerminal/PaymentOption";

const Detail = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [terminalbox, setTerminalbox] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);


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
      <div className={"list"}>TRANS #
      <div className={"transaction-number"}>970099000001716 </div> 
      </div>
      <div className="detail__list">
        <div className="d-flex item_content">
          <div className={"list"}>SUBTOTAL</div>
          <div className="all_price">29.99</div>
        </div>
        <div className="d-flex item_content">
          <div className={"list"}>DISC</div>
          <div className="all_price">9.99</div>
        </div>
        <div className="d-flex item_content">
          <div className={"list"}>GIFT CARD</div> <div className="all_price">9.99</div>
        </div>
        <div className="d-flex item_content">
          <div className={"list"}>HST</div>
          <div className="all_price">3.90</div>
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