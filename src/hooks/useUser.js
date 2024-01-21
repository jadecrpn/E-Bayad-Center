import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner'

export const useUser = () => {
    const { register, handleSubmit, reset, watch, setError, formState: { errors } } = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const checkEmailExists = (email, accounts) => {
        return accounts.some(account => account.email === email);
    };

    const signUpUser = async (data) => {
        console.log(data);
        // Check if passwords match
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', { message: 'Passwords do not match' });
            return;
        }

        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        if (checkEmailExists(data.email, accounts)) {
            setErrorMessage('Email already registered.');
            return;
        }

        accounts.push(data);
        localStorage.setItem('accounts', JSON.stringify(accounts));

        toast.success('Account successfully registered!');
        reset();
        setErrorMessage('');
    };


    const handleSignIn = (data) => {
        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        console.log('Input email:', data.email);
        console.log('Input password:', data.password);

        const foundAccount = accounts.find(account => {
            console.log('Account email:', account.email);
            console.log('Account password:', account.password);
            return account.email === data.email && account.password === data.password;
        });

        if (foundAccount) {
            console.log('Successfully logged-in!');
            toast.success('Successfully logged-in!');
            setIsLoggedIn(true);
            setErrorMessage('');
            reset();
        } else {
            console.log('Login failed. No matching account found.');
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
    };
    return {
        
        isLoggedIn,
        errorMessage,
        signUpUser: handleSubmit(signUpUser), 
        handleSignIn: (e) => handleSubmit((data) => handleSignIn(e, data)),
        handleSignOut,
        register,
        watch,
        errors,
    };
};

