import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../../../data/data';

import Detail from '../Detail/Detail.jsx';
import Inventory from '../Inventory/Inventory.jsx';

import "./ShoppingCartMainPanel.css";
import "../Inventory/Inventory.css";

import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '20px',
  },
  inventoryParent: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '13px',
    marginTop: '0.5rem',
    label: {
      color: 'grey'
    }
  },
  inventoryFirstRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    marginRight: '1rem',
  },
  inventorySecondRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '0.5rem',
    marginRight: '1rem',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  iconContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: 20,
    '&:hover': {
      cursor: "pointer",
    },
  },
  addButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: 20,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MainPanel() {
  const classes = useStyles();


  const storeSelected = useSelector(state => state.landing.storeSelected);
  const storeLocations = useSelector(state => state.landing.storeLocations);
  const currentStoreFunction = useSelector(state => state.landing.currentStoreFunction);

  const currentDisplayProfile = useSelector(state => state.display.displayProfile);
  var currentDisplay = data.DISPLAY_PROFILE.find(o => o.name === currentDisplayProfile);

  return (
    // <div className="shoppingCart__main">
    //  <div className="shoppingCart__main--inventory">
    //    <Inventory /></div> 

    //   <div className="shoppingCart__main--detail">
    //     <Detail />
    //   </div>
    // </div>

    <div className="shoppingCart__main">
      <div className="shoppingCart__main--inventory">
        <div className="inventory">

          {/* Search bar */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              // placeholder={storeSelected === false ? "Store" : "Store / Message" }
              placeholder={currentDisplay.searchInputPlaceholder}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          {/* Invetory panel */}
          <List component="nav" aria-label="main mailbox folders" className={classes.root}>
            {data.inventory.map((item, index) => (
              <>
                {index === 0 ? <Divider /> : null}
                <ListItem className={classes.inventoryParent} key={item.NAME}>
                  <div className={classes.inventoryFirstRow}>
                    <div ><span className="inventory__card--label">SKU: </span>{item.SKU}</div>
                    <div ><span className="inventory__card--label">UID: </span>{item.UID}</div>
                    <div ><span className="inventory__card--label">QTY: </span>{item.QTY}</div>
                    <div ><span className="inventory__card--label">PRICE: </span>{item.PRICE}</div>
                  </div>
                  <div className={classes.inventorySecondRow}>
                    <div>{item.NAME}</div>
                  </div>
                  <div className={classes.iconContainer}>
                    <MoreVertIcon />
                  </div>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </div>
      </div>

      {/* Right Side Bar */}
      <div className="shoppingCart__main--detail">
        <Detail />
      </div>

    </div>
  );
}