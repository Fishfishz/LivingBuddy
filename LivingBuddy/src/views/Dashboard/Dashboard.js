import React, {useEffect, useState} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import firebase from '../../index.js';
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Title: '', Description: '', Date: new Date()};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      // console.log(event.target.name)
      // console.log(event.target.value)
      this.setState({
          [event.target.name]: event.target.value
      });
  }
  handleSubmit(e) {
      e.preventDefault();
      const ref = firebase.database().ref('events');
      const event = {
          Title: this.state.Title,
          Description: this.state.Description,
          Date: this.state.Date
      }
      console.log(event);
      ref.push(event);
      this.setState({
          Title: '',
          Description: '',
          Date: new Date()
      });
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <h1>Events!</h1>
        <button>Add the event</button>
        <p>Title</p>
        <input
            type = "text" name = "Title" onChange = {this.handleChange} value = {this.state.Title}
        />
        <p>Description</p>
        <input
            type = "text" name = "Description" onChange = {this.handleChange} value = {this.state.Description}
        />
        <p>Date</p>
        <input
            type = "date" name = "Date" onChange= {this.handleChange} value = {this.state.Date}
        />
      </form>
    );
  }
}
// ReactDOM.render(<EventForm />, document.getElementById('root'));

export default function Dashboard() {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  // const eventList = [{Title: "Dance night", Description: "blah blah blah", Date: '01/22/2021'}];
  // TODO fetch the eventList from the database
    useEffect(() => {
        const ref = firebase.database().ref('events');
        ref.on('value', (snapshot) => {
            let eventsFromDb = snapshot.val();
            let newState = [];
            for (let event in eventsFromDb) {
                newState.push({
                    Title: eventsFromDb[event].Title,
                    Description: eventsFromDb[event].Description,
                    Date: eventsFromDb[event].Date
                });
            }
            if (newState.length > 0 && newState !== events) {
                setEvents(newState);
            }
        });
    }, []);

  const eventCards = events.map((event) =>
      <GridItem xs={12} sm={12} md={4}>
          <Card chart>
              <CardHeader>
              </CardHeader>
              <CardBody>
                  <h4 className={classes.cardTitle}>{event.Title}</h4>
                  <p className={classes.cardCategory}>
                      {event.Description}
                  </p>
              </CardBody>
              <CardFooter chart>
                  <div className={classes.stats}>
                      <AccessTime /> {event.Date}
                  </div>
              </CardFooter>
          </Card>
      </GridItem>
  );


  return (
    <div>
        <EventForm />
        <GridContainer>
            {eventCards}
        </GridContainer>
    </div>
  );
}
