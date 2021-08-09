import React, { useState } from "react";
import "./Terminal.css";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import PaymentOption from "./PaymentOption";
import CloseIcon from "@material-ui/icons/Close";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: "0.5rem",
    fontSize: "12px",
    color: "grey",
    marginRight: "25%",
  },
  terminalbox: {
    marginTop: "15px",
  },
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
  label1: {
    color: "#212121",
    width: "91px",
    height: "47px",
    paddingLeft: "40px",
    marginTop: "-29px",
  },
  label2: {
    color: "#212121",
    width: "91px",
    height: "47px",
    paddingLeft: "140px",
    marginTop: "-47px",
  },
  amount: {
    width: "65px",
    height: "35px",
    border: "solid 0.5px grey",
    borderRadius: "5px",
    fontSize: "25px",
  },
  amount_box: {
    marginTop: "-27px",
    marginLeft: "66px",
  },
}));

const Terminal = (props) => {
  const classes = useStyles();
  const [paymentOptions, setPaymentOptions] = useState(false);
  const [value, setValue] = useState("1");
  const { name } = props;

  const paymentOptionHandler = () => {
    setPaymentOptions({ paymentOptions: true });
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="terminal">
      <div className={classes.terminalbox}>
        <div>
          <FormLabel className={classes.list}>
            <h5>Terminal for {name}</h5>
          </FormLabel>
        </div>
        <RadioGroup value={value} onChange={handleChange}>
          <div className={classes.label1}>
            <FormControlLabel
              value="1"
              control={<Radio color="#212121" />}
              label="1"
            />
          </div>
          <div className={classes.label2}>
            <FormControlLabel
              value="2"
              control={<Radio color="#212121" />}
              label="2"
            />
          </div>
        </RadioGroup>
        <div className={classes.list}>Amount</div>
        <div className={classes.amount_box}>
          <input className={classes.amount} type="text" />
        </div>
        <button className={classes.button} onClick={paymentOptionHandler}>
          SUBMIT
        </button>
        {/* {paymentOptions ? <PaymentOption /> : ""} */}
      </div>
    </div>
  );
};

export default Terminal;
