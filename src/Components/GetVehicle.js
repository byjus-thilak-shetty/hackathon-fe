import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GetVehicle = () => {
  const [pid, setPid] = useState("");
  const [sid, setSid] = useState(null);
  const [load, setLoaded] = useState(false);
  const getParkId = () => {
    axios
      .post("http://localhost:3000/api/payment", {
        headers: {
          "Content-Type": "application/json",
        },
        parking_id: sid,
      })
      .then((response) => setPid(response.data.data.amount), setLoaded(true));
  };

  const handleChange = (e) => {
    setSid(e);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        style={{ width: "170px", height: "25px", padding: "10px" }}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter Parking Id"
      />
      <br />
      <br />
      <button onClick={getParkId}>Submit</button>
      <br />
      <br />
      {load && <div>Amount = {pid}</div>}
      <Link to="/">Home</Link>
    </div>
  );
};

export default GetVehicle;
