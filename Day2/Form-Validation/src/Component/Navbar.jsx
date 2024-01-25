import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { FaRegRegistered, FaUserLarge } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/Context";

function Navbar() {
  const { authenticated } = useContext(AuthContext);
  return (
    <div>
      <div className="Nav">
        <ul>
          {authenticated ? (
            <></>
          ) : (
            <>
              <li>
                <Link className="Link" to="/login">
                  Login
                  <IoLogIn />
                </Link>
              </li>
              <li>
                <Link className="Link" to="/register">
                  Register
                  <FaRegRegistered />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
