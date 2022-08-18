import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Parking from "./Components/Parking";
import UserDetails from "./Components/UserDetails";
import GetVehicle from "./Components/GetVehicle";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/User" element={<UserDetails />} />
        <Route path="/getVehicle" element={<GetVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}
