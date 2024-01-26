import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";

const useCurrent = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const userId = JSON.parse(sessionStorage.getItem("user"))._id || "";

      try {
        setIsLoading(true);
        const response = await fetch(
          `https://rest-api-bjno.onrender.com/id/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const json = await response.json();

        if (json.message) {
          throw new Error(json.message);
        }

        setCurrentUser(json);
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (authenticated) {
      fetchData();
    } else {
      setCurrentUser(null);
    }
  }, [authenticated]);

  return { currentUser, isLoading };
};

export default useCurrent;
