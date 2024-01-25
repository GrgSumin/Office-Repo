import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { AuthContext } from "../Context/Context";
import Loader from "../Loading/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticated, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, []);
  const [list, setList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://rest-api-bjno.onrender.com/users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          enqueueSnackbar(errorData.message || "Error fetching data", {
            variant: "error",
          });
          return;
        }

        const data = await response.json();
        setList(data);
      } catch (error) {
        console.log("Error fetching data:", error);
        enqueueSnackbar("Error fetching data", { variant: "error" });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const logOutAccount = () => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    logout();
    sessionStorage.removeItem("user");
    navigate("/login");
    enqueueSnackbar("Logged out", { variant: "success" });
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://rest-api-bjno.onrender.com/delete/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        enqueueSnackbar(errorData.message || "Error deleting user", {
          variant: "error",
        });
        return;
      }

      enqueueSnackbar(`User with ID ${userId} deleted successfully`, {
        variant: "success",
      });
      setList((oldList) => oldList.filter((item) => item._id !== userId));
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error deleting user", { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h1>Welcome</h1>

      <button onClick={logOutAccount} className="btn out">
        Logout
      </button>

      <h2>User List:</h2>
      <table className="userTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn delete"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/update/${user._id}`)}
                  className="btn update"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
