
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner'


export const useUser = () => {
    const { register,  reset, setError, watch, formState: { errors } } = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const signUpUser = async (data) => {
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', { message: 'Passwords do not match' });
            return false; // Indicate failure
        }

        const accountsKey = 'accounts';
        let accounts = JSON.parse(localStorage.getItem(accountsKey)) || [];

        try {
            const hashedPassword = await hashPassword(data.password);

            const userKey = `user_${data.email}`;
            accounts.push({ key: userKey, ...data, password: hashedPassword });
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            toast.success('Account successfully registered!');
            reset();
            setErrorMessage('');
            
            return true;

        } catch (error) {
            console.error('Signup failed:', error.message);
            setErrorMessage('Signup failed. Please try again.');
            return false; // Indicate failure
        }
    };

    const hashPassword = async (password) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
    
        // Use the SubtleCrypto API to perform a SHA-256 hash
        const hashedArrayBuffer = await crypto.subtle.digest('SHA-256', data);
    
        // Convert the ArrayBuffer to a hex string
        const hashedPassword = Array.from(new Uint8Array(hashedArrayBuffer))
            .map((byte) => byte.toString(16).padStart(2, '0'))
            .join('');
    
        return hashedPassword;
    };


    const handleSignIn = async ({ email, password }) => {
        try {
            // Check if the user account exists
            const user = await getUserByEmail(email);
    
            if (!user) {
                return { success: false, error: 'Account does not exist' };
            }
    
            // Check if the provided password matches the stored password
            const isPasswordValid = await validatePassword(password, user.password);

            if (!isPasswordValid) {
                return { success: false, error: 'Invalid password' };
            }
    
            // Additional checks for account validity and complete information can be added here
            // For example, you might check if the user account is active, has verified email, etc.
    
            return { success: true, user };

        } catch (error) {
            console.error('Error during sign-in:', error.message);
            return { success: false, error: 'Unexpected error during sign-in' };
        }
    };
    

    const handleSignOut = () => {
        localStorage.removeItem('userEmail'); // Clear the stored email
        setIsLoggedIn(false);
    };

    
    const getUserByEmail = async (email) => {
        try {
            const accountsKey = 'accounts';
            console.log('Email:', email);
    
            const accounts = JSON.parse(localStorage.getItem(accountsKey)) || [];
            console.log('Accounts:', accounts);
    
            const user = accounts.find((account) => account.email === email);
    
            if (!user) {
                console.log('User not found');
                toast.error('Account does not exist. Please try again.');
                throw new Error('User not found');
            }
    
            console.log('User found:', user);
            return user;
        } catch (error) {
            console.error('Error fetching user by email:', error.message);
            toast.error('Error during sign-in. Please try again.');
            throw new Error('Error fetching user');
        }
    };

const validatePassword = async (inputPassword, storedPassword) => {
    try {
        // Your logic to compare inputPassword with storedPassword
        const hashedInputPassword = await hashPassword(inputPassword);

        if (hashedInputPassword !== storedPassword) {
            // Passwords do not match
            console.error('Invalid password');
            toast.error('Invalid password. Please try again.');
            return false;
        }

        return true; // Passwords match
    } catch (error) {
        console.error('Error validating password:', error.message);
        toast.error('Error during sign-in. Please try again.');
        throw new Error('Error validating password');
    }
};


    return {
        getUserByEmail,
        validatePassword,
        isLoggedIn,
        errorMessage,
        setErrorMessage,
        signUpUser,  // Pass signUpUser as an argument to handleSubmit
        handleSignIn,  // Pass handleSignIn as an argument to handleSubmit
        handleSignOut,
        register,
        watch,
        errors,
        hashPassword
    };
};

export const validateFormData = (formData) => {
    // Implement your validation logic here
    return true; // For now, always return true as a placeholder
};