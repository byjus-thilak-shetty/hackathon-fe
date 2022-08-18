import { useState } from "react";
import { Link } from "react-router-dom";

const GetVehicle = () => {
  const [pid, setPid] = useState("");
  const [sid, setSid] = useState(null);
  const getParkId = () => {
    console.log("called");
    // fetch(
    //     "https://jsonplaceholder.typicode.com/users")
    //                 .then((res) => res.json())
    //                 .then((json) => {
    //                     this.setState({
    //                         items: json,
    //                         DataisLoaded: true
    //                     });
    //                 })
  };

  const handleChange = (e) => {
    setSid(e);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        style={{ width: "170px", height: "25px", padding: "10px" }}
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Enter User Id"
      />
      <br />
      <br />
      <button onClick={getParkId}>Submit</button>
      <br />
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default GetVehicle;
