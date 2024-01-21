
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
            <Toaster richColors position="bottom-right" />
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="max-w-md w-full p-8 bg-white shadow-2xl rounded-md border-3 border-slate-700">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Login</h2>
                    {errorMessage && (
                        <div className="text-red-500 mb-4 border-2 border-red-300 p-4 bg-red-200 rounded-md">
                            {errorMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login