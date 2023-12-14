'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/util/auth_context';

export default function Login() {
  const GatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
  const { user, login } = useAuth();
  const router = useRouter();

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

    // Make a POST request to your backend API to create a new user
    await login(formData);

    if (user) {
      router.push('/main_page');
    } else {
      // display error message
      console.error(`Error logging in!`);
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
        <Link 
          className={styles.registrationLink}
          href="/user_registration"
        >
          Create an account
        </Link>
      </form>
      
    </div>
  );
}
