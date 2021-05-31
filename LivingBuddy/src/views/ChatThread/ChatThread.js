import React, { useEffect, useState, forceUpdate } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

import { fb } from "../../app";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },

  text: {
    overflowY: 'scroll',
  }
};

const useStyles = makeStyles(styles);

export default function ChatThread() {

  //TODO: we want to make the chat thread scrollable
  //TODO: my message should show up in the right

  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [friendName, setFriendName] = useState("Yazan");

  // How can we edit this using the auth info we have?
  const myName = "Chris";

  // The chat array should be fetched from the database
  // Currently it's just a dummy data

  const handleSend = () => {
    const input = document.getElementById("input");
    if(input.value != "") {
      const ref = fb.database().ref("messages");
      const message = {
        text: input.value,
        from: myName,
        to: friendName
      };
      ref.push(message);
    }
    input.value = "";
  };

  
  const thread = messages.map(message => {
    const fromMe = message.from == myName;
    let style = "";
    if(fromMe) {
      style = "flex-end";
    }
    return (
    <GridContainer justify={style}>
      <GridItem xs={12} sm={12} md={3}>
        <Card chart>
          <CardBody >
            <p>{message.text}</p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )});

  useEffect(() => {
    const ref = fb.database().ref("messages");
    ref.on("value", (snapshot) => {
      let messagesFromDb = snapshot.val();
      let newState = [];
      for (let message in messagesFromDb) {
        const json = messagesFromDb[message];
        const sent = json.from === myName && json.to === friendName;
        const received = json.from === friendName && json.to === myName;
        console.log(friendName);
        if (sent || received) {
           newState.push(json);
        }
      }
      setMessages(newState);
    });
  }, []);

  // doesn't update properly
  const handleFriend = ((e) => {
    document.getElementById("friend").innerHTML = e.target.value;
    setFriendName(e.target.value);
  });

  return (
    <div>
      <label>Choose a friend:</label>
      <select 
        onChange={handleFriend}>
        <option value="">Friend</option>
        <option value="Chris">Chris</option>
        <option value="Yazan">Yazan</option>
        <option value="Andy">Andy</option>
        <option value="Frank">Frank</option>
      </select>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 id="friend" className={classes.cardTitleWhite}></h4>
            </CardHeader>
            <CardBody>
              <div>{thread}</div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={10}>
                  <input
                    id="input"
                    type="text"
                    name="Title"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <Button 
                    color="primary"
                    onClick={handleSend}>
                    send</Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
