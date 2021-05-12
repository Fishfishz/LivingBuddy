import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccessTime from "@material-ui/icons/AccessTime";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { fb } from "../../index";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Title: "", Description: "", Date: new Date() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const ref = fb.database().ref("events");
    const event = {
      Title: this.state.Title,
      Description: this.state.Description,
      Date: this.state.Date,
    };
    console.log(event);
    ref.push(event);
    this.setState({
      Title: "",
      Description: "",
      Date: new Date(),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Events!</h1>
        <button>Add the event</button>
        <p>Title</p>
        <input
          type="text"
          name="Title"
          onChange={this.handleChange}
          value={this.state.Title}
        />
        <p>Description</p>
        <input
          type="text"
          name="Description"
          onChange={this.handleChange}
          value={this.state.Description}
        />
        <p>Date</p>
        <input
          type="date"
          name="Date"
          onChange={this.handleChange}
          value={this.state.Date}
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
    const ref = fb.database().ref("events");
    ref.on("value", (snapshot) => {
      let eventsFromDb = snapshot.val();
      let newState = [];
      for (let event in eventsFromDb) {
        newState.push({
          Title: eventsFromDb[event].Title,
          Description: eventsFromDb[event].Description,
          Date: eventsFromDb[event].Date,
        });
      }
      if (newState.length > 0 && newState !== events) {
        setEvents(newState);
      }
    });
  }, []);

  const eventCards = events.map((event) => (
    <GridItem xs={12} sm={12} md={4}>
      <Card chart>
        <CardHeader></CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>{event.Title}</h4>
          <p className={classes.cardCategory}>{event.Description}</p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> {event.Date}
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  ));

  return (
    <div>
      <EventForm />
      <GridContainer>{eventCards}</GridContainer>
    </div>
  );
}
