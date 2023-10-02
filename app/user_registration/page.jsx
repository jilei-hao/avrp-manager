'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';

export default function UserRegistration() {
  const GatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
  console.log("GatewayURL: ", GatewayURL);

  // State to store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit: ", formData);

    if (formData.password !== formData.passwordConfirm) {
      alert('Passwords do not match.');
      return;
    }

    // Make a POST request to your backend API to create a new user
    try {
      const response = await fetch(`${GatewayURL}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("response: ", response);

      if (response.status === 201) {
        console.log('User created successfully');
        // Redirect or display a success message
      } else {
        // Handle errors, e.g., validation errors from the backend
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete='on'
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            autoComplete='on'
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            required
            autoComplete='on'
          />
        </div>
        <div>
          <input 
            type="submit"
            value="Create User"
          />
        </div>
        <p>Already have an account? <Link href="/">Login</Link></p>
      </form>
    </div>
  );
}
