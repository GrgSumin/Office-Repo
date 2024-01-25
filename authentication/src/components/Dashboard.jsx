import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const deleteUser = (id) => {
        setUsers((prev) => prev.filter((item) => item._id !== id));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "https://rest-api-bjno.onrender.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();

                setUsers(data);
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (!users || users.length < 1)
        return (
            <div style={{ padding: "20px", fontSize: "30px", color: "#fff" }}>
                Users list is empty
            </div>
        );

    return (
        <div className="users-list-container">
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.email}</td>
                            <td>{user.created_at}</td>
                            <td className="btn-container">
                                <div
                                    className="btn btn-primary"
                                    onClick={() => {
                                        navigate(`/update/${user._id}`);
                                    }}
                                >
                                    Update
                                </div>
                                <div
                                    className="btn btn-danger"
                                    onClick={() => {
                                        deleteUser(user._id);
                                    }}
                                >
                                    Delete
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
