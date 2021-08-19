import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { selectCurrentFunction, selectStore } from '../../reducers/actions/landing.action.js';

const useStyles = makeStyles({
  root: {
    width: "400px",
    backgroundColor: "#72BB53",
    color: "white",
    height: "150px",
    marginLeft: "1.5rem",
    textAlign:"center",
    marginTop: "1.5rem",
    '&:hover': {
      cursor: "pointer",
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StoreCard(props) {
  const classes = useStyles();
  // const storeSelected = useSelector(state => state.landing.storeSelected);
  // const handleCardOnClick = () => {
  //   localStorage.setItem("selectedStore", props.text);
  //   if (storeSelected === false) {
  //     selectStore(props.text);
  //   }
  //   if (storeSelected === true) {
  //     selectCurrentFunction(props.text);
  //   }
  // }

  return (
    <Card className={classes.root}
      onClick={props.onclick}>
      <CardContent >
        <Typography variant="h5" component="h2">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}