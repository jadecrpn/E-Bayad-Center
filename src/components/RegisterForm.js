import React, { useState } from 'react';

const RegisterForm = () => {
  const buttonStyle = {
    backgroundColor: '#be800d',
    color: '#000000',
    border: '1px solid rgb(0, 0, 0)',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto', // Center the button horizontally
  };

  
  // State variables to store form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Event handler to update form data on input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., send data to a server
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <form className = "Registerform" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" href="/register" style={buttonStyle} >Register</button>
    </form>
  );
};

export default RegisterForm;