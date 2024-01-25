import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Label from "./Label";
import Input from "./Input";

function UpdateUser() {
  const { _id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://rest-api-bjno.onrender.com/id/${_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 404) {
          enqueueSnackbar("User not found", { variant: "warning" });
          return;
        }

        if (!response.ok) {
          const errorData = await response.json();
          enqueueSnackbar(errorData.message || "Error fetching user data", {
            variant: "error",
          });
          return;
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        enqueueSnackbar("Error fetching user data", { variant: "error" });
      }
    };

    fetchUser();
  }, [_id]);
  const handleUpdate = async () => {
    console.log(JSON.stringify(user));
    try {
      const response = await fetch(
        `https://rest-api-bjno.onrender.com/update/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        enqueueSnackbar("Error updating user", {
          variant: "error",
        });
        return;
      }
      enqueueSnackbar(`User with ID ${_id} updated successfully`, {
        variant: "success",
      });
      navigate("/home");
    } catch (error) {
      console.error(`Error updating user with ID ${_id}:`, error);
      enqueueSnackbar("Error updating user", { variant: "error" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h1>Update User</h1>
      <Label label="FirstName" />
      <Input
        type="text"
        name="firstname"
        placeholder="Enter First Name"
        value={user.firstName || ""}
        onChange={handleChange}
      />
      <Label label="Last Name:" />
      <Input
        type="text"
        name="lastName"
        value={user.lastName || ""}
        onChange={handleChange}
        placeholder="Enter Last Name"
      />
      <Label label="Email:" />
      <Input
        type="text"
        name="email"
        value={user.email || ""}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <Label label="Password" />
      <Input
        type="password"
        name="password"
        value={user.password || ""}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <button onClick={handleUpdate} className="btn">
        Update
      </button>
    </div>
  );
}

export default UpdateUser;
