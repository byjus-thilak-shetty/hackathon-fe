import { useState, React } from "react";
import { Link } from "react-router-dom";
import GetUid from "./GetUid";
import axios from "axios";

const UserDetails = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("00");
  const [uid, setUid] = useState(false);

  const putUsers = async () => {
    setUid(true);
    // fetch("http://localhost:3000/api/user", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     phone_number: phone,
    //   }),
    // });

    axios
      .post("http://localhost:3000/api/user", {
        headers: {
          "Content-Type": "application/json",
        },
        name: name,
        phone_number: phone,
      })
      .then((response) => console.log(response));
  };
  const handleChange = (event) => {
    setName(event);
    {
      console.log(name);
    }
  };

  const handleChangePhone = (event) => {
    setPhone(event);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Upload user details to park</h1>
      <input
        style={{ width: "170px", height: "25px", padding: "10px" }}
        type="text"
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        style={{ width: "170px", height: "25px", padding: "10px" }}
        type="text"
        onChange={(event) => handleChangePhone(event.target.value)}
        placeholder="Enter Phone Number"
      />
      <br />
      <br />
      <button onClick={putUsers}>Submit</button>
      <br />
      <br />
      {!uid && <Link to="/">Home</Link>}

      {uid && (
        <div>
          Phone Number->{phone}{" "}
          <Link to="/">
            <button>OK</button>
          </Link>
        </div>
      )}
      {/* <BrowserRouter>
          <Routes>
            <Route path="/parking" element={<Parking />} />
          </Routes>
        </BrowserRouter> */}
    </div>
  );
};

export default UserDetails;
