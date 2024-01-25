import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";
const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
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
        if (formData.firstName === "" || formData.lastName === "") {
            toast.error("Fill all the fields");
            return;
        }
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
                "https://rest-api-bjno.onrender.com/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            setIsLoading(false);
            if (!response.ok) {
                toast.error("Registration failed.");
            }

            const userData = await response.json();

            if (userData.message) {
                toast.error(userData.message);
                return;
            }

            toast.success("Registration successful!");
            toast.success("User Logged In!");
            sessionStorage.setItem("user", userData._id);
            login();
        } catch (error) {
            setIsLoading(false);
            toast.error("An error occurred during registration:", error);
        }
    };

    return (
        <form className="form-container">
            <div className="form-heading">Register</div>
            <FormField
                type="text"
                name="firstName"
                labelName="First Name"
                value={formData.firstName}
                handleChange={handleChange}
            />
            <FormField
                type="text"
                name="lastName"
                labelName="Last Name"
                value={formData.lastName}
                handleChange={handleChange}
            />
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
                    Sign Up
                </button>
            </div>
            {isLoading ? <Loading /> : ""}
        </form>
    );
};

const FormField = ({ type, name, value, labelName, handleChange }) => {
    return (
        <div className="form-field">
            <label htmlFor={name}>{labelName}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e) => {
                    handleChange(name, e.target.value);
                }}
            />
        </div>
    );
};

export default Register;
