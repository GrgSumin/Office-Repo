import React from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import Loading from "./Loading";
import "../styles/Profile.css";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const { currentUser, isLoading } = useCurrentUser();
    const { logout } = useAuth();

    console.log({ isLoading });
    if (isLoading === true && isLoading === null) {
        return <Loading />;
    }
    if (!currentUser) {
        return logout();
    }

    return (
        <div className="user-details">
            <div>
                Full name: {`${currentUser.firstName} ${currentUser.lastName} `}
            </div>
            <div>Email: {currentUser.email}</div>
            <div>Created at: {currentUser.created_at}</div>
        </div>
    );
};

export default Profile;
