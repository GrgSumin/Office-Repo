import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Invalid email address");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(
                "https://rest-api-bjno.onrender.com/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message || "Unknown error");
                setIsLoading(false);
                return;
            }

            const data = await response.json();
            setIsLoading(false);

            if (data.message === "Login Success") {
                toast.success("Login Successful!");
                sessionStorage.setItem("user", data.data._id);
                login();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred during login");
            setIsLoading(false);
        }
    };

    return (
        <form className="form-container">
            <div className="form-heading">Log In</div>
            <FormField
                type="email"
                name="email"
                labelName="Email"
                value={formData.email}
                handleChange={handleChange}
            />

            <FormField
                type="password"
                name="password"
                labelName="Password"
                value={formData.password}
                handleChange={handleChange}
            />

            <div className="btn-wrapper">
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Log In
                </button>
            </div>
            {isLoading ? <Loading /> : <></>}
        </form>
    );
};

const FormField = ({ type, name, value, labelName, handleChange }) => {
    return (
        <div className="form-field">
            <label htmlFor={name}>{labelName}</label>
            <input
                id={name}
                type={type}

                name={name}
                value={value}
                autoComplete="none"
                onChange={(e) => {
                    handleChange(name, e.target.value);
                }}
            />
        </div>
    );
};

export default Login;
