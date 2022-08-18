import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Alert from "@material-ui/lab/Alert";
// import AlertTitle from "@material-ui/lab/AlertTitle";

const Parking = (props) => {
  const [vehicle, setVehicle] = useState("");
  const [uid, setUid] = useState("");
  const [vno, setVno] = useState("");

  const apiCall = () => {
    //     fetch('https://samplewebsite.com/API/', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     parameterOne: 'something',
    //     parameterTwo: 'somethingElse'
    //   })
    // });
    axios
      .post("http://localhost:3000/api/parking", {
        headers: {
          "Content-Type": "application/json",
        },
        phone_number: uid,
        vehicle_number: vehicle,
        vehicle_type: vno,
      })
      .then((response) => console.log(response));
  };

  const handleChangeVehicle = (event) => {
    setVehicle(event);
  };

  const handleChangeuid = (event) => {
    setUid(event);
  };

  const handleChangevno = (event) => {
    setVno(event);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Enter Vehicle Details:</h1>
      {/* <h1>Recept</h1>
      <button>
        <h3>Generate Recept</h3>
      </button> */}
      <input
        style={{ width: "170px", height: "25px", padding: "10px" }}
        onChange={(event) => handleChangeVehicle(event.target.value)}
        placeholder="Phone Number"
      />
      <br />
      <br />
      <input
        style={{ width: "170px", height: "25px", padding: "10px" }}
        onChange={(event) => handleChangeuid(event.target.value)}
        placeholder="Enter Vehicle Number"
      />
      <br />
      <br />
      <input
        style={{ width: "170px", height: "25px", padding: "10px" }}
        onChange={(event) => handleChangevno(event.target.value)}
        placeholder="Enter Vehicle Type"
      />
      <br />
      <br />
      <button onClick={apiCall}> Submit </button>
      <Link to="/">
        <h5>Home</h5>
      </Link>
    </div>
  );
};

export default Parking;
