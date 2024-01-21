
import { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navbar'; 

const Signup = () => {
    const navigate = useNavigate();
    const { errors, errorMessage, signUpUser } = useUser();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSignUpAndSave = async (e) => {
        e.preventDefault();
    
        try {
          await signUpUser(formData);
          // Store the email in local storage
          localStorage.setItem('userEmail', formData.email);
          // Redirect to the dashboard after successful signup
          navigate('/dashboard');
        } catch (error) {
          console.error('Signup failed:', error);
        }
      };
    
    return (
        <main>
           <Navigation />
            <Toaster richColors position="bottom-right" />
            <div className="div-container1">
                
                    
                    {
                        errorMessage &&
                        <div className="text-red-500 mb-4 border-2 border-red-300 p-4 bg-red-200 rounded-md">{errorMessage}</div>
                    }
                    <form onSubmit={handleSignUpAndSave }>
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
