
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';



export const useUser = () => {
    const navigate = useNavigate();
    const { register,  reset, setError, watch, formState: { errors } } = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const signUpUser = async (data) => {

        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', { message: 'Passwords do not match' });
            return false; // Indicate failure
        } 

        try {
          const response = await fetch('http://localhost:3005/accounts', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });
  
          if (!response.ok) {
              // Handle the case where the server returns an error
              console.error('Registration failed');
              return false;
          }
  
          // Registration successful, you can now redirect to the dashboard or perform any other action
          console.log('Registration successful');
          // Redirect to the dashboard or perform other actions here
          return true;
      } catch (error) {
          console.error('Error during registration', error);
          return false;
      }
  };



        const loginUser = async (formData) => {
            console.log('Trying to login with:', formData);
        
            try {
                const apiUrl = 'http://localhost:3005/accounts';
                const response = await fetch(apiUrl);
                const accounts = await response.json();
                console.log('Fetched accounts:', accounts);
        
                const user = accounts.find((account) => account.email.toLowerCase() === formData.email.toLowerCase());
        
                if (!user) {
                    console.log('User not found');
                    setErrorMessage('User not found');
                    return null;
                }

                navigate('/dashboard'); // Redirect to the dashboard
                toast.success('Login successful!');
                console.log('User found:', user);
            
                // Rest of your code...
            
                } catch (error) {
                console.error('Login failed:', error.message);
                setErrorMessage('Login failed. Please try again.');
                return null;
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


    

    const handleSignOut = () => {
        localStorage.removeItem('userEmail'); // Clear the stored email
        setIsLoggedIn(false);
    };

    const validatePassword = async (enteredPassword, hashedPassword) => {
        const enteredPasswordHash = await hashPassword(enteredPassword);
        return enteredPasswordHash === hashedPassword;
    };

  


    return {
        validatePassword,
        isLoggedIn,
        errorMessage,
        loginUser,
        setErrorMessage,
        signUpUser,
        handleSignOut,
        register,
        watch,
        errors,
        hashPassword,
        
    };
};

