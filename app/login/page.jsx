'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useAuth } from '@/util/auth_context';

export default function Login() {
  const GatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
  const { login } = useAuth();
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
    const res = await login(formData);

    if (res.success) {
      // redirect to main page
    } else {
      // display error message
      console.error("Error logging in: ", res.message);
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
