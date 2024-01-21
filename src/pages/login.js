
import { useState} from 'react';
import { useUser } from '../hooks/useUser';
import { Toaster } from 'sonner'
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navbar'; 

const Login = () => {
    const navigate = useNavigate();
    const { handleSignIn, errorMessage } = useUser();  // Change 'login' to 'handleSignIn'

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleSignIn(formData);  // Pass formData to handleSignIn
            // Redirect to the dashboard after successful login
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <main>
            <Navigation />
            <Toaster richColors className='div-container-position' />
            <div className="div-container1">
               
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
                        <button type="submit" className="signup_button"> Sign In </button>
                    </form>
               
            </div>
        </main>
    );
};

export default Login