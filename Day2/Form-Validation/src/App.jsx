import { SnackbarProvider } from "notistack";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import Register from "./Component/Register";
import UpdateUser from "./Component/UpdateUser";
import { AuthContext } from "./Context/Context";

function App() {
  const { authenticated, login, logout } = useContext(AuthContext);
  return (
    <>
      <SnackbarProvider />
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/update/:_id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
