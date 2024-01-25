import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import "./styles/Forms.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Update from "./components/Update";
import useAuth from "./hooks/useAuth";

const App = () => {
    const { authenticated } = useAuth();

    return (
        <BrowserRouter>
            <Navbar />
            {authenticated ? <AfterAuthRoutes /> : <BeforeAuthRoutes />}
            <Toaster position="top-right" />
        </BrowserRouter>
    );
};

const AfterAuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update/:userId" element={<Update />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};

const BeforeAuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default App;
