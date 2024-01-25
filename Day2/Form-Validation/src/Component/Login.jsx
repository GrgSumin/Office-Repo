import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { AuthContext } from "../Context/Context";
import useMutate from "../hooks/useMutate";
import { useSnackbar } from "notistack";
import Loader from "../Loading/Loader";
import useFetch from "../hooks/useFetch";

function Login() {
  const { authenticated, login } = useContext(AuthContext);
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const { isLoading, isError, data, handleSubmit } = useMutate("login", "POST");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleLogin = () => {
    if (forms.email === "" || forms.password === "") {
      enqueueSnackbar("Fill the box", { variant: "warning" });
      return;
    }

    handleSubmit(forms);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  if (authenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <form className="form-container">
      {isLoading && <Loader />}{" "}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;
