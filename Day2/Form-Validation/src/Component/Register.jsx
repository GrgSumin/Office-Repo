import { enqueueSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import useMutate from "../hooks/useMutate";

function Register() {
  const { authenticated } = useContext(AuthContext);

  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { isLoading, isError, data, handleSubmit } = useMutate(
    "register",
    "POST"
  );

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      forms.email === "" ||
      forms.password === "" ||
      forms.lastName === "" ||
      forms.firstName === ""
    ) {
      enqueueSnackbar("Please fill in all the fields", { variant: "error" });
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(forms.email)) {
      enqueueSnackbar("Invalid format of email", { variant: "error" });
      return;
    }

    if (forms.password.length < 8) {
      enqueueSnackbar("Password must be at least 8 characters long", {
        variant: "error",
      });
      return;
    }

    await handleSubmit(forms);

    if (isError) {
      enqueueSnackbar("An error occurred during registration", {
        variant: "error",
      });
      console.log(isError);
      return;
    }

    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  if (forms.length < 1)
    if (authenticated) {
      return <Navigate to="/home" />;
    }

  return (
    <form onSubmit={handleRegister} className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <div className="form-field">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter FirstName"
          value={forms.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </div>
      <div className="form-field">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your LastName"
          name="lastName"
          value={forms.lastName}
          onChange={handleChange}
        />
      </div>
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
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default Register;
