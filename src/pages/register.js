import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router
import { useUser } from '../hooks/useUser';
import { Toaster } from 'sonner';
import Navigation from '../components/Navbar';
import { toast } from 'sonner'

const Signup = () => {
    const navigate = useNavigate();
    const { errors, errorMessage, signUpUser,  } = useUser();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSignUpAndSave = async (e) => {
        e.preventDefault();

        // Additional validation checks can be added here

        const { email, password, confirmPassword } = formData;
        

        // Check if any of the required fields are empty
        if (!email || !password || !confirmPassword) {
        console.error('Please fill in all required fields');
        toast.error('Signup failed. Fill the Form.');
        return;
    }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            // Set an error message
            // You might want to display this error message in your UI
            console.error("Passwords don't match");
            toast.error('Signup failed. Please try again.');
            return;
        }

        try {
            // Call the signup function from useUser hook
            await signUpUser({ email, password });
            
            localStorage.setItem('userEmail', formData.email);
            navigate('/dashboard');
            toast.success('Account successfully registered!');
            return true;

        } catch (error) {
            // Handle signup error
            console.error('Signup failed:', error.message);
        }
    };
    
    return (
        <main>
            <Navigation />
            <Toaster richColors position="bottom-right" />
            <div className="div-container1">
                {errorMessage && (
                    <div className="text-red-500 mb-4 border-2 border-red-300 p-4 bg-red-200 rounded-md">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSignUpAndSave}>
                    <h2 className="head-title">Sign Up</h2>
                        <div className="outerBox">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border text-black ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="outerBox">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border text-black ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <div className="outerBox">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                Confirm Password:
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border text-black ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                        </div>
                        <button
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >Sign Up
                        </button>
                    </form>
                </div>
            
        </main>
    );
};

export default Signup;