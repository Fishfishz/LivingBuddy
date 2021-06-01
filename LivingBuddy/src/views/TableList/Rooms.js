import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { db } from "../../app";


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

class RoomApp extends React.Component {
  state = { 
    rooms: null,
    allRoom: []
  }

  componentDidMount() {
    console.log('mounted')
    db.collection('rooms')
      .get()
      .then( snapshot => {
        const rooms = []
        const allRoom = []
        snapshot.forEach( doc => {
          const data = doc.data()
          rooms.push(data)
        })
        this.setState({ rooms: rooms })
        this.state.rooms.map( rooms => {
          const singleRoom = []
          singleRoom.push(rooms.id, rooms.availability)
          singleRoom.push(rooms.availability)
          allRoom.push([rooms.id, rooms.availability.toString(), rooms.reserved, rooms.timeLeft, rooms.location])
        })
        this.setState({ allRoom: allRoom})
        // console.log(snapshot)
      })
      .catch( error => console.log(error))
  }

  render() {
    return (
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={styles.cardTitleWhite}>Room booking</h4>
          </CardHeader>
          <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={[
              "ID",
              "Availability",
              "Booked by whom",
              "Time left(in min)",
              "Location",
            ]}
            tableData={this.state.allRoom}
          />
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
    )
  }
}

export default RoomApp;