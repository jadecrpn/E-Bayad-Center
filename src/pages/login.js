import React from 'react';
import { useUser } from '../hooks/useUser';

import { Toaster } from 'sonner'

const Login = () => {
    const { handleSignIn, register, errorMessage } = useUser();

    return (
        <main>

            <Toaster richColors position="bottom-right" />
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="max-w-md w-full p-8 bg-white shadow-2xl rounded-md border-3 border-slate-700">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Login</h2>
                    {errorMessage &&
                        <div className="text-red-500 mb-4 border-2 border-red-300 p-4 bg-red-200 rounded-md">{errorMessage}</div>
                    }
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="text"
                                id="email"
                                {...register('email')}
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
                                {...register('password')}
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

export default Login;