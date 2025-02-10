import {} from "react";
import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Listing from "./pages/Listing";
import MyProduct from "./pages/MyProduct";
import Profile from "./pages/Profile";
import Rooms from "./pages/Rooms";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/my" element={<MyProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
