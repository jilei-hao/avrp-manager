'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useAuth } from '@/util/auth_context';
import Login from '../login/page';

export default function MainPage () {
  const { user } = useAuth();

  return (
    user ? (
      <h1>Logged in as: {user.email} </h1>
    ) : (
      <Login />
    )
  )

}