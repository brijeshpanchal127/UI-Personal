import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./PaymentOptionStyles.js";


const PaymentOption = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [value, setValue] = React.useState("terminal1");

  const checkOutOption =
    useSelector((state) => state.landing.storesData.checkOutOption) || [];

  const handleClick = (e, key) => {
    let scripts = [];

    checkOutOption.map((option) => {
      scripts.push(option.src);
    });

    scripts.forEach(function (url) {
      let script = document.createElement("script");
      script.src = url;
      script.async = false;
      document.body.appendChild(script);
    });

    if (selectedIndex === key) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(key);
    }
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {checkOutOption.map((option, index) => {
        return (
          <div>
            <div>
              <ListItem
                button
                key={option.key}
                onClick={(e) => handleClick(e, index)}
              >
                <ListItemText primary={option.text} />
                {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                key={option.key}
                in={index === selectedIndex}
                timeout="auto"
                unmountOnExit
              >
                <div className={classes.option_list}>
                  <div
                    id={option.div_id}
                    key={option.key}
                    className={classes.item}
                  ></div>
                </div>
              </Collapse>
              <Divider />
            </div>
          </div>
        );
      })
      }
    </List>
  );
};

export default PaymentOption;
