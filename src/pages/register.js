import React from 'react';
import { useUser } from '../hooks/useUser';
import Navbar from '@/components/Navbar';
import { Toaster } from 'sonner'

const Signup = () => {
    const { handleSignUp, register, watch, errors, errorMessage } = useUser();

    return (
        <main>
            <Navbar />
            <Toaster richColors position="bottom-right" />
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="max-w-md w-full p-8 bg-white shadow-2xl rounded-md border-3 border-slate-700">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Sign Up</h2>
                    {
                        errorMessage &&
                        <div className="text-red-500 mb-4 border-2 border-red-300 p-4 bg-red-200 rounded-md">{errorMessage}</div>
                    }
                    <form onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="text"
                                id="email"
                                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                                className={`w-full px-3 py-2 border text-black ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', { required: 'Password is required', minLength: 6 })}
                                className={`w-full px-3 py-2 border text-black ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                Confirm Password:
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                {...register('confirmPassword', { required: 'Confirm Password is required' })}
                                className={`w-full px-3 py-2 border text-black ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Signup;
