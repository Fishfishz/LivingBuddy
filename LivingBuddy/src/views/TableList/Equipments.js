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
    equipments: null,
    allEquipment: []
  }

  componentDidMount() {
    console.log('mounted')
    db.collection('equipments')
      .get()
      .then( snapshot => {
        const equipments = []
        const allEquipment = []
        snapshot.forEach( doc => {
          const data = doc.data()
          equipments.push(data)
        })
        this.setState({ equipments: equipments })
        this.state.equipments.map( equipments => {
          const singleEquipment = []
          singleEquipment.push(equipments.id, equipments.availability)
          singleEquipment.push(equipments.availability)
          allEquipment.push([equipments.id, equipments.availability.toString(), equipments.reserved, equipments.timeLeft, equipments.location])
        })
        this.setState({ allEquipment: allEquipment})
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
            <h4 className={styles.cardTitleWhite}>Equipment booking</h4>
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
            tableData={this.state.allEquipment}
          />
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
    )
  }
}

export default RoomApp;