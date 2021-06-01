import React from "react";
import { fb } from "../../app.js";
import "./book.css";

const Book = ({ data, bookedData, service }) => {
  const [id, setId] = React.useState(0);
  const [time, setTime] = React.useState(0);

  const handleChangeId = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  };

  const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const makeItem = function (X) {
    return <option>{X.id}</option>;
  };

  const handleSubmitBook = (event) => {
    event.preventDefault();
    fb.firestore()
      .collection(service)
      .doc(id)
      .update({
        timeLeft: time,
        reserved: sessionStorage.getItem("email"),
        availability: false,
      });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    fb.firestore().collection(service).doc(id).update({
      timeLeft: 0,
      reserved: "none",
      availability: true,
    });
  };

  return (
    <div>
      <h2>Booking</h2>
      <form onSubmit={handleSubmitBook}>
        <div>
          <p>Select the service you want to book</p>
          <select id="bookSelect" onClick={handleChangeId}>
            {data.map((element) => (
              <option value={element.id}>{element.id}</option>
            ))}
          </select>
        </div>

        <div>
          <p>How long do you want to reserve the service?(in minutes)</p>
          <input
            type="number"
            onChange={handleChangeTime}
            placeholder=""
            required
          ></input>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <h2>End Booking</h2>
      <form onSubmit={handleCancel}>
        <div>
          <p>Select the service you want to finish reserving</p>
          <select id="cancelSelect" onClick={handleChangeId}>
            {bookedData.map((element) => (
              <option value={element.id}>{element.id}</option>
            ))}
          </select>
        </div>
        <input type="submit" value="End Booking!" />
      </form>
    </div>
  );
};

export default Book;
