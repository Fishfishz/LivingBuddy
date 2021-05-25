import React from "react";
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

import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZnJvc3R5LWZvZy02IiwiZXhwIjoxNjIxOTI2NjcyfQ.rZ0AgpWHcDqpYb_L9ABNxBQY4YYdL5XJiyhpg3NFRA4";

chatClient.connectUser(
  {
    id: "frosty-fog-6",
    name: "frosty",
    image: "https://getstream.io/random_png/?id=frosty-fog-6&name=frosty",
  },
  userToken
);

const channel = chatClient.channel("messaging", "frosty-fog-6", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Talk about React",
  members: ["frosty-fog-6"],
});

const App = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);
export default App;
// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0",
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//   },
// };
//
// const useStyles = makeStyles(styles);
//
// export default function UserProfile() {
//   const classes = useStyles();
//   return (
//     <div>
//       <GridContainer>
//         <GridItem xs={12} sm={12} md={12}>
//           <Card>
//             <CardHeader color="primary">
//               <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
//               <p className={classes.cardCategoryWhite}>Complete your profile</p>
//             </CardHeader>
//             <CardBody>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={5}>
//                   <CustomInput
//                     labelText="Company (disabled)"
//                     id="company-disabled"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                     inputProps={{
//                       disabled: true,
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={3}>
//                   <CustomInput
//                     labelText="Username"
//                     id="username"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <CustomInput
//                     labelText="Email address"
//                     id="email-address"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//               </GridContainer>
//
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={8}>
//                   <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
//                   <CustomInput
//                     labelText="text"
//                     id="text"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                     inputProps={{
//                       multiline: true,
//                       rows: 5,
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <Button color="primary">Send</Button>
//                 </GridItem>
//               </GridContainer>
//             </CardBody>
//           </Card>
//         </GridItem>
//       </GridContainer>
//     </div>
//   );
// }
