import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  option_list: {
    padding: "5%",
  },
  item: {
    "& #amount_input": {
      margin: "0 0 0 4px",
      width: "25%",
      padding: "2%",
    },
    "& #button_submit": {
      backgroundColor: "#72BB53",
      width: "100%",
      color: "#ffffff",
      padding: "4%",
      border: "none",
    },
    "& .radio_btn": { padding: "20%", margin: "4%" },
    "& .amount_div": { display: "flex", margin: "2%" },
    "& .teminal_label": { padding: "1px 10px 1px 3px", fontSize: "x-small" },
    "& .amount_label": {
      fontSize: "x-small",
      paddingTop: "6px",
      marginRight: "9px",
    },
  },
}));

export { useStyles };
