import React from "react";
import "../styles/Navbar.css";

import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { authenticated, logout } = useAuth();

    const handleLogout = () => {
        sessionStorage.clear();
        logout();
    };

    return (
        <div className="navbar">
            {authenticated ? (
                <>
                    <Link className="nav-item" to="/">
                        Home
                    </Link>
                    <Link className="nav-item" to={"/profile"}>
                        Profile
                    </Link>
                    <div
                        className="nav-items logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </div>
                </>
            ) : (
                <>
                    <Link className="nav-item" to="/login">
                        Login
                    </Link>
                    <Link className="nav-item" to="/register">
                        Register
                    </Link>
                </>
            )}
        </div>
    );
};

export default Navbar;
