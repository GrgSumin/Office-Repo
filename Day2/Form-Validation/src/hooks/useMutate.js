import { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import Login from "./useFetch";
import { AuthContext } from "../Context/Context";

const useMutate = (url, method) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { authenticated, login } = useContext(AuthContext);
  const handleSubmit = async (body) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://rest-api-bjno.onrender.com/${url}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method,
          body: JSON.stringify(body),
        }
      );

      const json = await response.json();
      setData(json);

      if (url === "register" && data.message === "Registration Success") {
        enqueueSnackbar("Registration Successful", { variant: "success" });
        console.log("Success");
      }

      if (url === "login" && data.message !== "Login Success") {
        console.log("wrong detail");
        enqueueSnackbar("Incorrect Details", { variant: "error" });
        return;
      }

      if (url === "login") {
        login();
        sessionStorage.setItem("user", JSON.stringify(json.data));
        enqueueSnackbar("Logged In", { variant: "success" });
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, data, handleSubmit };
};

export default useMutate;
