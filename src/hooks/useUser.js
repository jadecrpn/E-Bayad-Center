import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner'

export const useUser = () => {
    const { register, handleSubmit, reset, watch, setError, formState: { errors } } = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = (data) => {
        console.log(data);
        // Check if passwords match
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', { message: 'Passwords do not match' });
            return;
        }

        let accounts = localStorage.getItem('accounts');

        if (!accounts) {
            accounts = [];
        } else {
            accounts = JSON.parse(accounts);

            for (let i = 0; i < accounts.length; i++) {
                if (accounts[i].email === data.email) {
                    setErrorMessage('Email already registered.');
                    return;
                }
            }
        }
        accounts.push(data);

        localStorage.setItem('accounts', JSON.stringify(accounts));
        toast.success('Account successfully registered!')
        reset();
        setErrorMessage('');
    };

    const handleSignIn = (data) => {
        let accounts = localStorage.getItem('accounts');

        if (accounts) {
            accounts = JSON.parse(accounts);

            for (let i = 0; i < accounts.length; i++) {
                if (data.email === accounts[i].email && data.password === accounts[i].password) {
                    console.log('Successfully logged-in!')
                    toast.success('Successfully logged-in!')
                    setIsLoggedIn(true);
                    setErrorMessage('');
                    reset();
                    return;
                } else {
                    setErrorMessage('Invalid email or password. Please try again.');
                    return;
                }
            }
        }

        setErrorMessage('Account not found. Please sign up.');
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
    };

    return {
        isLoggedIn,
        errorMessage,
        handleSignUp: handleSubmit(handleSignUp),
        handleSignIn: handleSubmit(handleSignIn),
        handleSignOut,
        register,
        watch,
        errors,
    };
};