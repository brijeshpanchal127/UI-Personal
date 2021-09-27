import React, { useState } from "react";
import "./Inventory.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import data from "../../../../data/data";
// const useStyles = makeStyles((theme) => ({
//   inventoryParent: {
//     display: "flex",
//     flexDirection: "column",
//     fontSize: "13px",
//     marginTop: "0.5rem",
//     label: {
//       color: "grey",
//     },
//   },
//   inventoryFirstRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     width: "90%",
//     marginRight: "1rem",
//   },
//   inventorySecondRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     width: "90%",
//     marginTop: "0.5rem",
//     marginRight: "1rem",
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: "white",
//     marginTop: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   iconContainer: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "flex-end",
//     position: "relative",
//     bottom: 20,
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   addButton: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "flex-end",
//     position: "relative",
//     bottom: 20,
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

const Inventory = () => {
  const classes = useStyles();
  return (
    <div className="inventory__main_root">
      <div className={"search"}>
        <div className={"searchIcon"}>
          <i class="fas fa-bars"></i>
          {/* <ReorderRoundedIcon /> */}
        </div>
        <div className="MuiInputBase-root inputRoot">
          <input
            placeholder="Store"
            type="text"
            aria-label="search"
            class="MuiInputBase-input inputInput"
            value=""
          />
        </div>
      </div>

      <List
        component="nav"
        aria-label="main mailbox folders"
        className={"inventory__main_root"}
      >
        {data.inventory.map((item, index) => (
          <>
            {index === 0 ? <hr class="solid" /> : null}
            <ListItem className={"inventoryParent"} key={item.NAME}>
              <div className={"inventoryFirstRow"}>
                <div>
                  <span className="inventory__card--label">SKU: </span>
                  {item.SKU}
                </div>
                <div>
                  <span className="inventory__card--label">UID: </span>
                  {item.UID}
                </div>
                <div>
                  <span className="inventory__card--label">QTY: </span>
                  {item.QTY}
                </div>
                <div>
                  <span className="inventory__card--label">PRICE: </span>
                  {item.PRICE}
                </div>
              </div>
              <div className={"inventorySecondRow"}>
                <div>{item.NAME}</div>
              </div>
              <div className={"iconContainer"}>
                <MoreVertIcon />
              </div>
            </ListItem>
            <hr class="solid" />
          </>
        ))}
      </List>
    </div>
  );
};

export default Inventory;
