import React from "react";
// @material-ui/core components
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Rooms from "./Rooms.js";
import Equipments from "./Equipments.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Landing() {
  const classes = useStyles();
  return (
    <Router>
      <Link to={'/admin/rooms'}><button style={{height: '50px', width : '100px'}}>Rooms</button></Link>
      <Link to={'/admin/equipments'}><button style={{height: '50px', width : '100px'}}>Equipments</button></Link>
      <Switch>
        <Route path='/admin/rooms' component={Rooms} />
        <Route path='/admin/equipments' component={Equipments} />
      </Switch>
    </Router>
  );
}
