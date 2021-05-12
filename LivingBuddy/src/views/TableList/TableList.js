import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Equipment booking</h4>
            <p className={classes.cardCategoryWhite}>
              Check all the equipments availability
            </p>
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
              tableData={[
                ["MapleHallDryer1", "True", "Frank", "60", "MapleHall First Floor"],
                ["MapleHallDryer2", "True", "Andy", "50", "MapleHall First Floor"],
                ["MapleHallDryer3", "False", "null", "0", "MapleHall First Floor"],
                ["MapleHallWasher1", "True", "Chris", "60", "MapleHall First Floor"],
                ["MapleHallWasher2", "True", "Yazan", "70", "MapleHall First Floor"],
                ["MapleHallWasher3", "False", "null", "0", "MapleHall First Floor"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Room Booking</h4>
            <p className={classes.cardCategoryWhite}>
              Check all the rooms availability
            </p>
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
              tableData={[
                  ["MapleHallPianoRoom1", "True", "Frank", "60", "MapleHall First Floor"],
                  ["MapleHallPianoRoom2", "True", "Andy", "50", "MapleHall First Floor"],
                  ["MapleHallPianoRoom3", "False", "null", "0", "MapleHall First Floor"],
                  ["MapleHallStudyRoom1", "True", "Chris", "60", "MapleHall Second Floor"],
                  ["MapleHallStudyRoom2", "True", "Yazan", "70", "MapleHall Third Floor"],
                  ["MapleHallStudyRoom3", "False", "null", "0", "MapleHall Fourth Floor"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
