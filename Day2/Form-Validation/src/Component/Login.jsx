import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { AuthContext } from "../Context/Context";
import { enqueueSnackbar } from "notistack";
import Loader from "../Loading/Loader";

function Login() {
  const { authenticated, login } = useContext(AuthContext);
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (forms.email === "" || forms.password === "") {
      enqueueSnackbar("Fill the box", { variant: "warning" });
      console.log("Fill The box");
      return;
    }

    try {
      const response = await fetch("https://rest-api-bjno.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forms),
      });

      const json = await response.json();

      if (json.message !== "Login Success") {
        console.log("Incorrect Details");
        enqueueSnackbar("Incorrect Details", { variant: "error" });
        return;
      }

      login();

      const userData = json.data;

      sessionStorage.setItem("user", JSON.stringify(userData));

      enqueueSnackbar("Logged In", { variant: "success" });

      navigate("/home");
    } catch (error) {
      console.log("Error during login:", error);
      enqueueSnackbar("An error occurred during login", { variant: "error" });
    }
  };

  if (authenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <form className="form-container">
      <h1 className="form-title">
        Login <FaUserLarge />
      </h1>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={forms.email}
          onChange={(e) =>
            setForms((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          placeholder="Enter more than 8 characters"
          name="password"
          value={forms.password}
          onChange={(e) =>
            setForms((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </div>
      <button type="button" className="btn" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;
