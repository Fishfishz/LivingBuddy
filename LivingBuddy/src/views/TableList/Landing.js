import React from "react";
// @material-ui/core components
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Equipments from "./Equipments.js";
import { fb } from "../../app.js";
import RoomTable from "./table.js";

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

const Landing = () => {
  var checked = true;
  const [roomData, setRoomData] = React.useState(false);
  const [filteredRoomData, setFilteredRoomData] = React.useState(false);
  const [bookedRoomData, setBookedRoomData] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getRooms();
  }, [!checked]);

  const getRooms = () => {
    setLoading(true);

    const loadingTimeOut = setTimeout(() => {
      setLoading(false);
    }, 5000);

    const ref = fb.firestore().collection("rooms");
    ref.onSnapshot((querySnapShot) => {
      const items = [];
      const filteredItems = [];
      const bookedItems = [];
      querySnapShot.forEach((doc) => {
        items.push(doc.data());
        if (doc.data().availability === true) {
          filteredItems.push(doc.data());
        } else {
          bookedItems.push(doc.data());
        }
      });
      setRoomData(items);
      setFilteredRoomData(filteredItems);
      setBookedRoomData(bookedItems);
      console.log(filteredRoomData.length);
      clearTimeout(loadingTimeOut);
      setLoading(false);
      checked = true;
    });
  };

  return (
    <Router>
      <Link to={"/admin/rooms"}>
        <button onClick={getRooms}>Rooms</button>
      </Link>
      <Link to={"/admin/equipments"}>
        <button>Equipments</button>
      </Link>
      <Switch>
        <Route path="/admin/rooms" render={() => <RoomTable data={roomData} filteredData={filteredRoomData} bookedData={bookedRoomData} />} />
        <Route path="/admin/equipments" component={Equipments} />
      </Switch>
    </Router>
  );
};

export default Landing;
