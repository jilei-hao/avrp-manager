'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';

export default function Login() {
  const GatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
  console.log("GatewayURL: ", GatewayURL);

  // State to store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    // Make a POST request to your backend API to create a new user
    try {
      const response = await fetch(`${GatewayURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("response: ", response);

      if (response.status === 200) {
        console.log('Logged in successfully');
      } else {
        console.error('Error logging in');
      }
    } catch (error) {
      console.error('Error logging in', error);
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
          <input 
            type="submit" 
            value="Login"
          />
        </div>
        <Link href="/user_registration">Create an account</Link>
      </form>
      
    </div>
  );
}
