import { enqueueSnackbar } from "notistack";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import useCurrent from "../hooks/useCurrent";
import Loader from "../Loading/Loader";

function Profile() {
  const { currentUser, isLoading } = useCurrent();
  const { logout } = useContext(AuthContext);
  if (isLoading === true || isLoading === null) {
    return <Loader />;
  }
  if (!currentUser) {
    logout();
    return enqueueSnackbar("Error");
  }

  return (
    <div className="form-container">
      <h1>Name:{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
      <h2>Email : {`${currentUser.email}`}</h2>
      <h2>Created AT : {`${currentUser.created_at}`}</h2>
    </div>
  );
}

export default Profile;
