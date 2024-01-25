import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const { authenticated } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            const userId = sessionStorage.getItem("user") || "";

            try {
                setIsLoading(true);
                const response = await fetch(
                    `https://rest-api-bjno.onrender.com/id/${userId}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const user = await response.json();

                if (user.message) {
                    throw new Error(user.message);
                }

                setCurrentUser(user);
            } catch (error) {
                console.error(
                    "An error occurred while fetching user data:",
                    error
                );
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

export default useCurrentUser;
