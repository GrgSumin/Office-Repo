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
  const handleSubmit = (body) => {
    try {
      setIsLoading(true);
      const response = fetch(`https://rest-api-bjno.onrender.com/${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(body),
      });

      const json = response.json();
      setData(json);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, data, handleSubmit };
};

export default useMutate;
