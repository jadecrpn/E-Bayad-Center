import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navbar";
import { useUser } from "../hooks/useUser";
import { Toaster } from "sonner";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const { handleSignIn } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    // Check if any of the required fields are empty
    const { email, password } = formData;

    if (!email || !password) {
      console.error("Please fill in all required fields");
      toast.error("Login failed. Fill the Form.");
      return;
    }

    try {
      event.preventDefault();

      // Call the handleSignIn function from useUser hook
      const signInResult = await handleSignIn(formData);

      if (signInResult.success) {
        // Handle successful login, e.g., redirect to dashboard
        localStorage.setItem("userEmail", formData.email);
        navigate("/dashboard");
        toast.success("Login successful!");
      } else {
        // Handle sign-in failure
        console.error("Sign-in failed:", signInResult.error);

        if (signInResult.error === "Invalid password") {
          // Display an error message for invalid password
          toast.error("Invalid password. Please try again.");
        } else {
          // Display a generic error message for other sign-in failures
          toast.error("Login failed. Please try again.");
        }
      }
    } catch (error) {
      // Handle unexpected errors during login
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <>
      <Navigation />
      <Toaster richColors className="div-container-position" />
      <div className="div-container1" style={{ minHeight: '83.8vh' }}>
        {errorMessage && (
          <div className="text-red-500 mb-4 border-2 border-red-300 p-4 bg-red-200 rounded-md">
            {errorMessage}
          </div>
        )}

          <form onSubmit={handleSubmit}>
                        <h2 className="head-title">Login</h2>
                        <div className="outerBox">
                            <label htmlFor="email" className="labelBox">
                                Email:
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="inputBox"
                            />
                        </div>

                        <div className="outerBox">
                            <label htmlFor="password" className="labelBox">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="inputBox"
                            />
                        </div>
                        <button type="submit" className="signup_button">
                            Sign In
                        </button>
                    </form>
      </div>
    </>
  );
};

export default Login;
